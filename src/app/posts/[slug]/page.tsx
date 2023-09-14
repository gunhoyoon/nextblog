import React from "react";
import { getPostData } from "../../../service/posts";
import Image from "next/image";
import PostDetailCard from "@/components/PostDetailCard";
import PostsCardPreview from "@/components/PostsCardPreview";
import { Metadata } from "next";
type Props = {
  params: {
    slug: string;
  };
};
// Dynamic metadata // SEO 활용
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

// 상세 페이지 해당 데이터에 맞게 title 과 description 사용하기 x 이름 그대로 함수사용

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  // 전체 데이터를 담은 Post // props로 넘겨주는 데이터
  // 이전 다음 게시물을 보여주고 넘어가게 하기 위해 prev , next 추가

  const { title, path, prev, next } = post;
  // post 상세 페이지
  // 전체 데이터인 post에서 title과 path만 구조분해해서 사용
  // 해당 페이지에선 상세 내용을 반환하기 때문에 이 페이지가 제공할건 , 상세 페이지 내용 / 이전 글 다음 글로 이동하는 기능이 필요함
  const metadata: Metadata = {
    title: `Post | ${title}`,
    description: "건호의 커리어 소개",
  };

  // 해당 컴포넌트에선 getPostData 에 해당하는 데이터중 title과 path 를 사용할거고
  // postDetailCard 에서 사용할 post 전체를 props 으로 넘겨줄거임
  // 그리고 그 넘겨받은 props 데이터를 또 구조분해해서 title , description, date, content 만 사용할 것이고,
  // post 데이터의 타입은 PostData가 될거임, 타입 자체도 구조분해로 사용했기 때문에 이 컴포넌트에선 title과 path를 가지고 있고,
  // 역할을 나눈 PostDetailCard 컴포넌트에선 title , description , date ,content 의 데이터에 대한 타입만 가지고 있는거임
  return (
    <article className="rounded-lg m-4 bg-gray-100 overflow-hidden">
      <Image
        className="w-full h-1/5 max-h-[600px]"
        src={`/blog/images/posts/${path}.png`}
        alt={`${title}`}
        width={760}
        height={420}
      />
      <PostDetailCard post={post} />

      {/* <PostsCardPreview post={slug} /> */}
      <section className="flex shadow-md">
        {prev && <PostsCardPreview post={prev} type="prev" />}
        {next && <PostsCardPreview post={next} type="next" />}
      </section>
    </article>
  );
}
// props 넘겨줄 때 post란 이름으로 넘겨줬잖아 ., 근데 왜 slug 로 받아 건호야ㅑㅑㅑㅑㅑㅕㅑㅑㅑ

// 컴포넌트 역할 나누기 PostDetailCard

// 슬러그를 통해 들어오는 path 를 fileName으로 받아서
// 전체 데이터를 불러와 전체 안에서 있는 이름인지를 비교해서 없다면, 에러 던져줌
// 있으면 파일을 읽어올 수 있는거니까 uth-8로 인코딩

// 이렇게만 사용하면 처음엔 아무런 스타일이 적용되어있지 않는데
// 이건 테일윈드를 사용하게 되면 기본적으로 html 태그의 값들을 초기화시켜서 테일윈드의 className으로 적용해주지 않는 이상 스타일이 나타나지 않음
// 이와같은 현상을 해결하기 위해 https://tailwindcss.com/docs/typography-plugin 에서  -D @tailwindcss/typography 설치해줘야ㅕ함

// 다음 포스트 , 이전 포스트 카드를 구현할 때에 한번에 너무 포괄적으로 생각하다보면 구현 자체가 머릿속에 그려지지않는데,
// 전체의 데이터를 불러오게 해야된다면, 우선 하나라도 먼저 화면에 그려보고 하나씩 연결지어주는 순서로 구현하다보면 사고를 확장해가며 완성하게됨
