import React from "react";
import { getPostData } from "../../../service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  console.log(post, "POST");
  return (
    <div>
      <h1>{post.title}</h1>

      <pre>{post.content}</pre>
    </div>
  );
}

// 슬러그를 통해 들어오는 path 를 fileName으로 받아서
// 전체 데이터를 불러와 전체 안에서 있는 이름인지를 비교해서 없다면, 에러 던져줌
// 있으면 파일을 읽어올 수 있는거니까 uth-8 ㄹ
