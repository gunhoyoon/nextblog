import path from "path";
// const path = require("path"); 로도 불러올 수 있음

import { readFile } from "fs/promises";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
// Post 에 할당된 타입 + content 에 해당하는 타입 //
export type PostData = Post & { content: string };

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
}

export async function getPost(path: string): Promise<Post | undefined> {
  const products = await getAllPosts();
  return products.find((item) => item.path == path);
}
// 상세 페이지

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  // console.log(filePath, "filePath");
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata) throw new Error(`${filePath} 에 해당하는 포스트 따윈 없음`);

  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
}

// 일단 슬러그를 통해서 해당 게시물 클릭 시 post안에 있는 path를 통해 주소에 전달되는건 알았음
// 감이 안왔던 부분은 그 path와 posts안에 있는 md파일의 데이터를 어떻게 읽어오는지 감이 안왔음
// 우선 스타일링을 안하고 pre 태그를 사용해서 그려줘서 slug 로 들어오는 값을 통해 내용을 뿌려준다 는 유추 정도
// 강의에선 일단 현재 경로에 접근하는 코드를 작성. 여기서 인자 fileName을 다이나믹하게 사용해서 path와 name이 일치한다면 다 읽어올 수 있게 됨
// 전체 데이터와 슬러그를 통해 들어오는 데이터를 가지고 이름을 비교해서 일치(파일이 없다면) 에러를 던지는 예외처리
// 있다면 읽어올 수 있으니 utf-8 로 인코딩을 해주고,
// {...얕은 복사를 통해 metadata와 filePath를 통해 읽어온 md파일의 데이터를 반환한다}
// 요번엔 오직 서버에서만 동작을 하기 떄문에 비교적 간단함

// 이제 nextjs 상 프론트 서버에서 데이터를 가지고와서 지지고 복고 하는것들의 로직은
// 어느정도 다 구현이 가능할거같음, 어렵게 볼 필요가 없고 노드쪽 코드를 잘 모르다보니 어색했는데 자주보고 사용하다보면 잘 다룰 수 있을거같음
