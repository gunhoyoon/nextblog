import React from "react";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";
import { getSlidePost } from "../service/posts";

export default async function SlidePost() {
  const posts = await getSlidePost();
  return (
    <section className="mx-20 mb-10">
      <h2>You may Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
        {/* chlidren */}
      </MultiCarousel>
    </section>
  );
}

// https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive

// 서버 컴포넌트와 클라이언트 컴포넌트를 하나의 컴포넌트 트리에서 조합할 수 있습니다.
// 서버에서, React는 모든 서버 컴포넌트를 렌더링하고 그 결과를 클라이언트로 보내기 전에 처리합니다.
// 이 과정에는 클라이언트 컴포넌트 내부에 중첩된 서버 컴포넌트도 포함됩니다.
// 이 단계에서 만난 클라이언트 컴포넌트는 무시됩니다.

// 클라이언트에서, React는 클라이언트 컴포넌트를 렌더링하고 서버 컴포넌트의 렌더링 결과를 클라이언트 컴포넌트의 결과와 결합하여 처리합니다.
// 만약 클라이언트 컴포넌트 내에 서버 컴포넌트가 중첩되어 있다면, 서버 컴포넌트의 렌더링된 내용은 정확하게 클라이언트 컴포넌트 내부에 적절하게 배치됩니다.
