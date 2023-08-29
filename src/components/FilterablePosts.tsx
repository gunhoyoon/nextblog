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
    <section>
      <PostGrid posts={filtered} />
      <Categories
        onClick={setSelected}
        selected={selected}
        categories={categories}
      />
    </section>
  );
}
