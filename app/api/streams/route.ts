import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const YoutubeRegex = new RegExp("^https:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]{11}")

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req: NextRequest) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYoutube = YoutubeRegex.test(data.url);


        if (!isYoutube) {
            NextResponse.json({ message: "Invalid Url" }, { status: 411 });
        }

        const extractedId = data.url.split("?v=")[1];

        if (!extractedId) {
            NextResponse.json({ message: "Invalid Url" }, { status: 411 });
        }

        await prismaClient.stream.create({
            data: {
                type: "youtube",
                url: data.url,
                active: true,
                upvote: 0,
                userId: data.creatorId,
                extractedId
            }
       })
       
    } catch (error) {
        NextResponse.json({ message: "Error While Creating Stream" }, { status: 411 });
    }
}

async function GET(req :NextRequest) {
    try {
        const creatorId = req.nextUrl.searchParams.get("creatorId");
        const upvote = req.nextUrl.searchParams.get("upvote");
    
        const streams = await prismaClient.stream.findMany({
            where: {
                userId: creatorId ?? "",
            },
            orderBy: {
                upvote: upvote ? "desc" : "asc"
            }
        });
    
        return NextResponse.json(streams , { status: 200 });
    } catch (error : any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}