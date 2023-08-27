"use client";
import { Post } from "@/service/posts";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
export default function Server() {
  const [posts, setPosts] = useState<Post[]>();
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  //    이런식으로 데이터를 뽑아내서 가져온게 아니라 가져와서ㅂ 뽑아낼 경우 결국 코드가 돌아갈 때 브라우저에 없는 서버쪽 코드를 돌리게 되니 에러가 남

  return (
    <section className="mx-20 mb-10">
      <h2>You may Like</h2>
      {posts &&
        posts.map((post) => (
          <PostCard key={post.path} post={post} />
          // <li key={post.path}>
          //   <h2>{post.title}</h2>
          //   <p>{post.date.toString()}</p>
          //   <p>{post.description}</p>
          // </li>
        ))}
    </section>
  );
}
