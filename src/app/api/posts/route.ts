import { getAllPosts } from "@/service/posts";
import { NextResponse } from "next/server";

export default function GET(requset: Request) {
  const posts = getAllPosts();
  console.log(posts);
  return NextResponse.json(posts);
}
