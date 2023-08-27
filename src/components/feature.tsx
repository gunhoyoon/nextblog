import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostGrid from "./PostGrid";
import { getFeatureedPost } from "../service/posts";

export default async function Feature() {
  const posts = await getFeatureedPost();

  return (
    <section className="mx-20 mb-10">
      <p className="font-bold mb-1">Featured Posts</p>
      {/* async 와 await 를 가져와서 사용하는 경우 에러가 발생함. next13 ,ts 자체 에러 */}
      {/* @ts-expect-error Async Server Component */}
      <PostGrid posts={posts} />
    </section>
  );
}

// 여기서도 마찬가지로 json 형식의 데이터를 가져와서 feature 가 true 인 친구들만 보여주는건데
// 아 그럼 서버에서의 json을 사용하는게 아니라 클라이언트를
