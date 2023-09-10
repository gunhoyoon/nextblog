import { Post, PostData, getPostData } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

// type Props = {
//   post: string;

// };
type Props = {
  post: Post;
  type: "prev" | "next";
};
const ICON_CLASS =
  "text-5xl m-4 text-yellow-300  transition-all group-hover:text-6xl";
export default function PostsCardPreview({
  post: { path, title, description },
  type,
}: Props) {
  return (
    // <section className="flex">
    //   {prev ? (
    //     <Link href={`/posts/${prev?.path}`}>
    //       <Image
    //         src={`/blog/images/posts/${prev?.path}.png`}
    //         alt={`${prev?.title}`}
    //         width={200}
    //         height={100}
    //       />
    //       <AiOutlineArrowLeft />
    //     </Link>
    //   ) : (
    //     ""
    //   )}

    //   {next ? (
    //     <Link href={`/posts/${next?.path}`}>
    //       <Image
    //         src={`/blog/images/posts/${next?.path}.png`}
    //         alt={`${next?.title}`}
    //         width={200}
    //         height={100}
    //       />
    //       <AiOutlineArrowRight />
    //     </Link>
    //   ) : (
    //     ""
    //   )}
    // </section>
    <Link
      href={`/posts/${path}`}
      className="group relative w-full bg-black max-h-56"
    >
      <Image
        className="w-full opacity-40"
        src={`/blog/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 n w-full text-white flex justify-around items-center px-8">
        {type === "prev" && <AiOutlineArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <AiOutlineArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}

// next prev 별로 나누는게 아닌 하나의 로직만 작성하고 컴포넌트를 각각 불러 사용

// 이렇게 새로운 로직을 구현할 때 해당 데이터 중 어떤 하나만 가져와도 전체를 가져올 수 있어서, 보여줄 수 있음
// 전체로 너무 크게 구상하려 안해도 됨
