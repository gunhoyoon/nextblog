import path from "path";
// const path = require("path"); 로도 불러올 수 있음
<<<<<<< HEAD
=======
// import { promises as fs, readFile } from "fs";
>>>>>>> 9de60ec (save)
import { readFile } from "fs/promises";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
export async function getFeatureedPost(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((item) => item.featured));
}
export async function getSlidePost(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((item) => !item.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filepath = path.join(process.cwd(), "data", "posts.json");
  return (
    readFile(filepath, "utf-8")
      .then<Post[]>(JSON.parse)
      // 2. 제네릭을 사용해서 JOSN.parse 되는 타입이 Post[] 임을 명시해줘야함
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
    // 1. 해당 코드에서 a에 대한 정보가 없기 떄문에 a.date를 이해못하고 있음
  );

<<<<<<< HEAD
  return (
    readFile(filepath, "utf-8")
      .then<Post[]>(JSON.parse) // .then((date => JSON.pares(date))) 전달받는 것과 호출할때 들어가는 인자가 동일하면 생략 가능

      // .then((res) => {
      //   return JSON.parse(res) as Post[];
      // })
      // 2. 제네릭을 사용해서 JOSN.parse 되는 타입이 Post[] 임을 명시해줘야함
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
    // 1. 해당 코드에서 a에 대한 정보가 없기 떄문에 a.date를 이해못하고 있음
  );
=======
  // const data = await fs.readFile(filepath, "utf-8");
  // console.log(data);
  // return JSON.parse(data);
>>>>>>> 9de60ec (save)
}

export async function getPost(path: string): Promise<Post | undefined> {
  const products = await getAllPosts();
  return products.find((item) => item.path == path);
}
// 상세 페이지
