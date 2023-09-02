import React from "react";
import { getPostData } from "../../../service/posts";
import ReactMarkdown from "react-markdown";
import ReactMarkdownViewer from "@/components/ReactMarkdownViewer";

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
      {/* <pre>{post.content}</pre> */}
      <ReactMarkdownViewer content={post.content} />
    </div>
  );
}

// 슬러그를 통해 들어오는 path 를 fileName으로 받아서
// 전체 데이터를 불러와 전체 안에서 있는 이름인지를 비교해서 없다면, 에러 던져줌
// 있으면 파일을 읽어올 수 있는거니까 uth-8로 인코딩

// 이렇게만 사용하면 처음엔 아무런 스타일이 적용되어있지 않는데
// 이건 테일윈드를 사용하게 되면 기본적으로 html 태그의 값들을 초기화시켜서 테일윈드의 className으로 적용해주지 않는 이상 스타일이 나타나지 않음
// 이와같은 현상을 해결하기 위해 https://tailwindcss.com/docs/typography-plugin 에서  -D @tailwindcss/typography 설치해줘야ㅕ함
