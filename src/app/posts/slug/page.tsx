import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostsPage({ params: slug }: Props) {
  return <div>PostsPage</div>;
}
// 슬라이드 추가해야됨
// home 에서 posts 클릭 시 posts 상세페이지로 넘아가야되는데 안됨,
// about , posts , contact

// 나나 나중에 하이라이트 뭔지 보기
// 라이브러리 사이트 찾아놨음, 필요한거 보고 하면됨
