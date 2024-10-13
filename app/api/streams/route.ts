import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as yt from "youtube-search-without-api-key"
import { Prisma } from "@prisma/client";



// const YoutubeRegex = new RegExp("^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([a-zA-Z0-9_-]{11})$");
const YoutubeRegex = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req: NextRequest) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYoutube = data.url.match(YoutubeRegex);


        if (!isYoutube) {
            NextResponse.json({ message: "Invalid Url" }, { status: 411 });
        }
        // console.log("youtube : " , isYoutube? isYoutube[1] : "");
        const extractedId = data.url.split("?v=")[1];
        // console.log("extractedId : " , extractedId); 
        // console.log("seraching on yt");   
        const VideoInfo = await yt.search(extractedId);
        // console.log("searching on yt is done");
        // console.log("VideoInfo : " , VideoInfo[0]);
        // console.log("Tile : " , VideoInfo[0].title);
        // console.log("Thumbnail : " , VideoInfo[0].snippet.thumbnails.high.url);

        // console.log("smallImg : " , VideoInfo[0].snippet.thumbnails.default.url.split);



        if (!VideoInfo) {   
            NextResponse.json({ message: "video does not extracted" }, { status: 411 });
        }

        if (!extractedId) {
            NextResponse.json({ message: "Invalid Url" }, { status: 411 });
        }

        
        const streamInstance = await prismaClient.stream.create({
            data: {
                type: "youtube",
                url: data.url,
                active: true,
                upvote: 0,
                userId: data.creatorId,
                extractedId: extractedId,
                title: VideoInfo[0].title ?? "Can't Find Title",
                SmallImg:`https://i.ytimg.com/vi/${extractedId}/hqdefault.jpg`,
                BigImg:"https://i.ytimg.com/vi/"+extractedId+"/hq720.jpg",
            }
        })
        console.log("streamInstance : " , streamInstance);
        if (!streamInstance) {
            return NextResponse.json({ message: "Stream Insertion Failed" }, { status: 411 });
        } 
        

        return NextResponse.json({
            message: "Stream Created",
            stream: streamInstance,
            VideoInfo: VideoInfo
        },
            { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error in creating stream" }, { status: 506 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const creatorId = req.nextUrl.searchParams.get("creatorId");
        const upvote = req.nextUrl.searchParams.get("upvote");

        console.log("req : ", req.nextUrl);
        console.log("creatorId : " , creatorId);

        console.log("Start Finding Streams");
        const streams = await prismaClient.stream.findMany({
            where: {
                userId: creatorId ?? "",
            },
            include: {
                upvotes: {
                   select: {
                    _count: true
                   } as Prisma.UpvotesSelect
                },
            },
            
        });

        return NextResponse.json(streams,  { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}