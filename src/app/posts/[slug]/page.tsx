import React from "react";
import { getPostData } from "../../../service/posts";
import Image from "next/image";
import PostDetailCard from "@/components/PostDetailCard";
type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path } = post;
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
    </article>
  );
}
// 컴포넌트 역할 나누기 PostDetailCard

// 슬러그를 통해 들어오는 path 를 fileName으로 받아서
// 전체 데이터를 불러와 전체 안에서 있는 이름인지를 비교해서 없다면, 에러 던져줌
// 있으면 파일을 읽어올 수 있는거니까 uth-8로 인코딩

// 이렇게만 사용하면 처음엔 아무런 스타일이 적용되어있지 않는데
// 이건 테일윈드를 사용하게 되면 기본적으로 html 태그의 값들을 초기화시켜서 테일윈드의 className으로 적용해주지 않는 이상 스타일이 나타나지 않음
// 이와같은 현상을 해결하기 위해 https://tailwindcss.com/docs/typography-plugin 에서  -D @tailwindcss/typography 설치해줘야ㅕ함
