import { PostData, getPostData } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: string;
};

export default async function PostsCardPreview({ post }: Props) {
  console.log(post, "slug");
  const { prev, next } = await getPostData(post);

  return (
    <section className="flex">
      {prev ? (
        <Link href={`/posts/${prev?.path}`}>
          <Image
            src={`/blog/images/posts/${prev?.path}.png`}
            alt={`${prev?.title}`}
            width={200}
            height={100}
          />
        </Link>
      ) : (
        ""
      )}

      {next ? (
        <Link href={`/posts/${next?.path}`}>
          <Image
            src={`/blog/images/posts/${next?.path}.png`}
            alt={`${next?.title}`}
            width={200}
            height={100}
          />
        </Link>
      ) : (
        ""
      )}
    </section>
  );
}
