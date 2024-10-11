import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const upvoteSchema = z.object({
  streamId: z.string(),
})
export async function POST(req: NextRequest) {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  const userInstance = await prismaClient.user.findFirst({
    where: {
      email: session.user.email
    }
  });

  if (!userInstance) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {

    const data = upvoteSchema.parse(await req.json());

    const streamInstance = await prismaClient.upvotes.create({
      data: {
        id: userInstance.id,
        streamId: data.streamId

      }
    });

    if (!streamInstance) {
      return NextResponse.json({ message: "Stream Not Found" }, { status: 404 });
    }
  } catch (e: any) {
    NextResponse.json({ message: e.message }, { status: 411 });
  }
}