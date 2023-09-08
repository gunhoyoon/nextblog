import React from "react";
import { getPostData } from "../../../service/posts";
import ReactMarkdown from "react-markdown";
import ReactMarkdownViewer from "@/components/ReactMarkdownViewer";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const { title, content, description, path, date } = await getPostData(slug);
  // 이제 페이지 자체를 좀 더 디테일하게 꾸밀거고 Image 태그 사용해서 ㄷ이전과 같이 path.png로 이미지 불러올거고 상세페이지를 좀더 꾸밀거임
  // 구조분해 사용한거 잊지마셈
  return (
    <article className="rounded-lg m-4 bg-gray-100 overflow-hidden">
      <Image
        className="w-full h-1/5 max-h-[600px]"
        src={`/blog/images/posts/${path}.png`}
        alt={`${title}`}
        width={760}
        height={420}
      />
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
    </article>
  );
}

// 슬러그를 통해 들어오는 path 를 fileName으로 받아서
// 전체 데이터를 불러와 전체 안에서 있는 이름인지를 비교해서 없다면, 에러 던져줌
// 있으면 파일을 읽어올 수 있는거니까 uth-8로 인코딩

// 이렇게만 사용하면 처음엔 아무런 스타일이 적용되어있지 않는데
// 이건 테일윈드를 사용하게 되면 기본적으로 html 태그의 값들을 초기화시켜서 테일윈드의 className으로 적용해주지 않는 이상 스타일이 나타나지 않음
// 이와같은 현상을 해결하기 위해 https://tailwindcss.com/docs/typography-plugin 에서  -D @tailwindcss/typography 설치해줘야ㅕ함
