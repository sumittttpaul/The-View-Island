import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { ...params } = await request.json();
  const searchParam: SearchParams = params;

  if (!searchParam)
    return NextResponse.next(new Response("Missing params", { status: 400 }));

  if (!searchParam.q)
    return NextResponse.next(new Response("Missing search", { status: 400 }));

  const dataRes = await fetch("http://localhost:3001", {
    cache: "force-cache",
    next: { tags: ["home-fetch"] },
  });

  if (!dataRes.ok) {
    return NextResponse.next(new Response("Data not found", { status: 400 }));
  }

  const post = await dataRes.json();

  if (!post) {
    return NextResponse.next(new Response("Data not found", { status: 400 }));
  }

  revalidateTag("home-fetch");

  return NextResponse.json(post.articles);
}
