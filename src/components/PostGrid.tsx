import React from "react";
import PostCard from "./PostCard";
import { Post } from "../service/posts";

type Props = {
  posts: Post[];
};
// Props.posts

export default function PostGrid({ posts }: Props) {
  return (
    <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4">
      {/* grid 사용으로 스크린 크기별 컬럼 설정 */}
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
// 어차피 정렬해서 보여주는 내용을 가지고 있는 애는 얘임
