import { NextResponse } from "next/server";
import { getAllPosts } from "../../../service/posts";

export async function GET(requset: Request) {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
}

// export async function GET(request: Request) {
//   const products = await getProducts();
//   return NextResponse.json({ products });

//   // NextResponse 기존 reponse 의 확장 버전 , 기존 reponse 로는 next js Ts에서 에러가 발생해서 이를 확장시켜 안정화를 갖춘 객체
// }

// 요청이 틀릴게 없는데 주소창에 /api/posts 해도 에러가 자꾸 나왔떤 이유
// export default 를 해서 405 에러가 뜬거임
// 사실 저걸 쓰고 안쓰고는 오직 파일에서 저거
