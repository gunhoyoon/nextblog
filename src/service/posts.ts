import path from "path";
// const path = require("path"); 로도 불러올 수 있음

import { readFile } from "fs/promises";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
// Post 에 할당된 타입 + content 에 해당하는 타입 //
export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeatureedPost(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((item) => item.featured));
}
export async function getSlidePost(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((item) => !item.featured));
}
// 리액트에서 제공하는 cache를 사용해 해당 함수가 호출 될 때 전달받는 인자가 같다면,
// 다시 부르는게 아닌 이 전에 캐시된 데이터를 반환해준다. (중복된 데이터 요청 제거)
// https://nextjs.org/docs/app/building-your-application/caching#full-route-cache
// 현재는 대부분의 페이지를 static 하게 만들기 때문에 크게 차이가 없을 수 있지만, 서버 사이드 렌더링을 사용하게 되면 큰 차이가 있게 될 것임.
export const getAllPosts = cache(async () => {
  console.log("getAllPosts");
  // fetch를 여러번 중복해서 요청한다 하더라도, nextjs 에서 자동으로 중복 제거를 해준다.
  // 근데 해당 함수와 같이 파일 시스템에 접근해서 json 데이터를 불러오는 것과 데이터 베이스에 접근하는 함수들은 한번 렌더링 될 때 여러번 호출해도
  // 중복 방지 없이 그대로 다 불려온다
  const filepath = path.join(process.cwd(), "data", "posts.json");
  return (
    readFile(filepath, "utf-8")
      .then<Post[]>(JSON.parse)
      // 2. 제네릭을 사용해서 JOSN.parse 되는 타입이 Post[] 임을 명시해줘야함
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
    // 1. 해당 코드에서 a에 대한 정보가 없기 떄문에 a.date를 이해못하고 있음
  );
});
// export async function getAllPosts(): Promise<Post[]> {}

export async function getPost(path: string): Promise<Post | undefined> {
  const products = await getAllPosts();
  return products.find((item) => item.path == path);
}
// 상세 페이지

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  // console.log(filePath, "filePath");
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);
  // post = 전체 데이터중 상세 페이지 접근 시에 넘겨받는 post 값을 통해 path와 fileName(현재 경로 + md 파일 이름) 비교해서 상세페이지 내용이 있다면
  // 그 친구 반환 / 없으면 undefined 반환
  if (!post) throw new Error(`${filePath} 에 해당하는 포스트 따윈 없음`);

  const index = posts.indexOf(post); // 이렇게 사용하게 되면 posts에 post 라는 인덱스가 존재하는지 확인 / 없으면 -1 리턴 / 있으면 해당 첫번째 인덱스 반환
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  // next = index 의 리턴값이 값이 있다면 1 / 없다면 -1을 반환하기 때문에 , 있다면 posts[index -1] 을 반환하게 되는 것임
  // 현재 정렬된 배열 기준에서 최신 순서대로 있기 때문에 값이 작아질수록 최근 게시물이 반환될거임
  // 배열의 범위를 벗어나지 않게 하기 위해서 length -1 로 조건을 비교해줘야함

  // prev = index가 posts.length -1 보다 크다 라고하면 마지막 게시물을 넘어가니 조건이 알맞지않고 작다 라고 작성하는게 맞음
  // index가 posts.length -1 보다 작아야 이전 게시물이 있는거임 index 자체는 현재 게시물의 index 이기 때문에 게시물 전체크기보다
  // 그 숫자가 작다면 아직 끝까지 안간거임 index 가 더 증가해도 되는거임

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
  // 이렇게 해서 해당 함수의 역할이 post의 모든 데이터를 반환하게 됨
}
// 타입을 통해 렌더링이 되는걸로 착각했음. next나 prev의 리턴을 보면 값이 없을 땐 null 이지만 값이 있게 된다면, 해당 post의 값을 반환하기 때문에
// 타입을 정의해줄 땐 post의 타입인 Post 타입 혹은 null 타입으로 정의를 해줘야하는거임

// index = posts.indexOf(post);
// const next = index > 0 ? posts[index-1] : null;
// const content = await readFile(filePath , 'utf-8')
// 지금은 sort를 사용해서 가장 최근 데이터 순으로 정렬이 된 상태니까

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
