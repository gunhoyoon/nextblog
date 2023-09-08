import { getAllPosts } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function NextPostsCard() {
  const posts = await getAllPosts();
  //   const filterPosts = posts.filter((post) => post.path > post.path);
  //   console.log(filterPosts, "filterPosts");

  return <div></div>;
}

// getAllposts 의 데이터는 순서대로 정렬이 되어있음
// 앞 뒤 게시물 보여주기 클릭 시 이동 / 마지막 혹은 첫 게시물 일시 포스트 게시물 하나만 보여주기
// 맵돌려서 인덱스로 다 뽑아서 순서대로 보여주기
