import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import ReactMarkdownViewer from "./ReactMarkdownViewer";

type Props = {
  date: Date;
  title: string;
  description: string;
  content: string;
};

export default function PostDetailCard({
  date,
  title,
  description,
  content,
}: Props) {
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
