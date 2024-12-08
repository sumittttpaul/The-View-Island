import { NextResponse } from "next/server";
import { validArticles } from "utils/Utility";

export async function POST(request: Request) {
  const { ...params } = await request.json();
  const searchParam: SearchParams = params;

  if (!searchParam)
    return NextResponse.next(new Response("Missing params", { status: 400 }));

  if (!searchParam.q)
    return NextResponse.next(new Response("Missing search", { status: 400 }));

  if (!searchParam.sortBy)
    return NextResponse.next(new Response("Missing sort by", { status: 400 }));

  if (!searchParam.language)
    return NextResponse.next(new Response("Missing language", { status: 400 }));

  if (!searchParam.time)
    return NextResponse.next(new Response("Missing time", { status: 400 }));

  const dataRes = await fetch("https://theviewislandbackend.vercel.app/");

  console.log(searchParam.sortBy);
  console.log(searchParam.time);
  console.log(searchParam.language);
  console.log(searchParam.q);

  if (!dataRes.ok) {
    return NextResponse.next(new Response("Data not found", { status: 400 }));
  }

  const post = await dataRes.json();

  if (!post) {
    return NextResponse.next(new Response("Data not found", { status: 400 }));
  }

  const articles = await validArticles(post.articles, 7, 15);

  return NextResponse.json(articles);
}
