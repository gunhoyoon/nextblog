import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  // 해당 함수 호출하면서 email 데이터 전달
  const response = await fetch("/api/contact", {
    // 전달받을 api 주소
    method: "POST",
    // 사용할 메서드
    body: JSON.stringify(email),
    // post 시 전송할 데이터
    headers: {
      "Content-Type": "application/json`",
    },
    // 타입
  });

  const data = await response.json();
  // 파싱
  if (!response.ok) {
    throw new Error(data.message || "서버에서 문제가 발생했습니다.");
    // 에러처리
  }
  return data;
  // 아니라면 제대로 들어온거니 데이터 반환
}

// contact 에서 실행되는 코드  = client 코드
// client 네트워크 요청
