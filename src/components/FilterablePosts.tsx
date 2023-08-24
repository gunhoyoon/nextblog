"use client";
import { Post } from "@/service/posts";
import React, { useState } from "react";
import PostGrid from "./PostGrid";
import Categories from "./Categories";

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
      : posts.filter((post) => post.category == selected);
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <PostGrid posts={posts} />
      <Categories
        selected={selected}
        onClick={setSelected}
        categories={categories}
      />
    </section>
  );
}
