import FilterablePosts from "../../components/FilterablePosts";
import { getAllPosts } from "../../service/posts";
import React from "react";

export default async function PostPage() {
  const posts = await getAllPosts();
  // console.log(posts[0], "posts");
  const categories = [...new Set(posts.map((post) => post.category))];
  // 카테고리 중복없는 카테고리 배열
  return <FilterablePosts posts={posts} categories={categories} />;
}
// 전체 데이터 받아와서 posts 로 넘겨주고
// 데이터 전체중 각각의 카테고리로 필터 하기 위해 set 구조 사용해서 중복 제거한 카테고리 배열 만들고 카테고리스로 중복 제거한 카테고리 배열 넘겨줌

// 결국 포스트를 필터링하는 컴포넌트 하나.
// 필터랑한 결과물을 보여주는 page 파일 하나
// 카테고리를 나타내는 카테고리 컴포넌트 하나로 posts 페이지가 완성됨
