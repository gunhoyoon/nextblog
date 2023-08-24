import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import React from "react";

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  // 카테고리 중복없는 카테고리 배열
  return <FilterablePosts posts={posts} categories={categories} />;
}

// 전체 데이터 가져오기 (기본, all post 선택시 전체가 나와야됨)
// 카테고리 별 데이터를 보여줘야하기 때문에 자료구조 , 메서드 사용해서 사용
