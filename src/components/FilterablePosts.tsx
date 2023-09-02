"use client";
import React, { useState } from "react";
import PostGrid from "./PostGrid";
import Categories from "./Categories";
import { Post } from "../service/posts";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All_Posts";
export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === "All_Posts"
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex justify-between mx-20 mt-4 mb-4">
      <PostGrid posts={filtered} />
      <Categories
        onClick={setSelected}
        selected={selected}
        categories={categories}
      />
    </section>
  );
}

// 넘겨받은 애들 타입 설정. 상태 하나 만들어서 기본값을 전체로 한 뒤에
// 현재 selected 가 물고 있는 값대로 상태 업데이트 시켜서 해당 데이터 화면에 뿌림
// 미리 만들어놓은 PostGrid 에 posts 값으로 필터링 된 결과값 보내줌
// 카테고리 컴포넌트를 따로 만들어서 onClick 시에 클릭한 카테고리 값을 setSelected에 넣어 업데이트 시켜줄거임 , 여기서 전달하는 값과 인자가 같으므로 생략.
// 전달받은 전체 카테고리 목록 전달해서 리스트로 만듦. string 으로 이루어진 배열이기때문에 category 자체는 string 이 될거임

// 미리 만들어놓은 PostGrid를 통해 데이터만 각각의 데이터로 넘겨줌으로써 아주 유용하게 재사용이 가능하게 함
