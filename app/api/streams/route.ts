import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST (req : NextRequest) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYoutube = data.url.includes("youtube.com");
        prismaClient.stream.create({
            userId: data.creatorId,
            url : data.url
        })
    } catch (error) {
        NextResponse.json({ error: "Error While Creating Stream" }, { status: 411 });
    }
}