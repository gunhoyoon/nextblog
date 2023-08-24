import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
  // type import
};

export default function PostCard({
  post: { title, description, date, category, path },
}: // PostCard 에서 프롭으로 post 받을거임 post에다 값 넣어줘야함
Props) {
  return (
    <article className="rounded-md overflow-hidden shadow-md">
      <Link href={`/posts/${path}`}>
        <Image
          className="w-full"
          src={`/blog/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center">
          <time className="self-end">{date.toString()}</time>
          {/* date 문자열 변환 */}

          <h3 className="font-bold text-lg">{title}</h3>
          <p className="w-full text-center trunacte">{description}</p>

          <span
            className="bg-blue-200 p-1.5 text-xs rounded-xl 
inline-block mb-2"
          >
            {category}
          </span>
        </div>
      </Link>
    </article>
  );
}
