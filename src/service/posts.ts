import path from "path";
// const path = require("path"); 로도 불러올 수 있음
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const filepath = path.join(process.cwd(), "data", "posts.json");

  const data = await fs.readFile(filepath, "utf-8");
  console.log(data);
  return JSON.parse(data);
}

export async function getPost(path: string): Promise<Post | undefined> {
  const products = await getPosts();
  return products.find((item) => item.path == path);
}
// 상세 페이지
