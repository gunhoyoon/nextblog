import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import ReactMarkdownViewer from "./ReactMarkdownViewer";
import { PostData } from "@/service/posts";

export default function PostDetailCard({ post }: { post: PostData }) {
  // 포스트 구조분해// 포스트 타입의 구조분해 를 함으로써 필요한 속성만 가져올 수 있게 됨
  const { title, description, date, content } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 text-4xl font-bold>
        {title}
      </h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-44 border-2 border-sky-600" mt-4 mb-8 />
      <ReactMarkdownViewer content={content} />
    </section>
  );
}
