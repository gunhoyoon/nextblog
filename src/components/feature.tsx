import React from "react";
import Image from "next/image";
import { getAllPosts } from "../service/posts";
import Link from "next/link";

export default async function Feature() {
  const posts = await getAllPosts();
  const featurePosts = posts.filter((item) => item.featured == true);
  console.log(featurePosts);

  return (
    <section className="mx-20 mb-10">
      <p className="font-bold mb-1">Featured Posts</p>

      <ul className="flex text-center gap-6">
        {featurePosts.map((item, index) => (
          <li key={index} className="w-3/12 shadow-md rounded">
            <Link href={`/post/${item.path}`}>
              <div className="rounded-full">
                <Image
                  className="w-full"
                  src={`/blog/images/posts/${item.path}.png`}
                  alt={item.path}
                  width={140}
                  height={70}
                />
                <p className="text-right">{item.date.toString()}</p>
                <dl>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </dl>
                <span
                  className="bg-blue-200 p-1.5 text-xs rounded-xl 
inline-block mb-2"
                >
                  {item.category}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 여기서도 마찬가지로 json 형식의 데이터를 가져와서 feature 가 true 인 친구들만 보여주는건데
// 아 그럼 서버에서의 json을 사용하는게 아니라 클라이언트를
