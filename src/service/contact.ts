// contact 에서 실행되는 코드  = client 코드

import { EmailData } from "./email";

// client 네트워크 요청
export async function sendContactEmail(email: EmailData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // 포스트 요청 후 api/contact POST 동작
  const data = await response.json();
  console.log(data, "data");
  // {message: '메세지 전송에 성공했습니다'}
  if (!response.ok) {
    throw new Error(data.message || "서버에서 문제가 생겼습니다");
  }
  return data;
}

// 해당 코드는 클라이언트 코드로 사실 use client 가 선언된 컴포넌트에 직접 작성해도 되는 코드임.
// 컴포넌트 안에서 비지니스 로직을 가지지 않고 따로 구분해 사용하기 위해 이렇게 따로 작성.

// form에서 서밋이 되면 POST 요청을 보낼거고 해당 데이터는 객체 형태의 email 을 JSON 형식의 문자열로 변환함을 의미.
// body에 email의 대한 내용을  , 헤더스에 요청한 본문에 데이터 타입이 JSON 이라는 것을 서버에게 알려줘서 JSON 형식의 데이터를 올바르게 처리할 수 있게 해준다
// 여기서 POST 요청을 했다는건 프론트 서버에서 POST 요청 시 어떻게 해줄건지에 대한 명시가 있어야된다는 것임
