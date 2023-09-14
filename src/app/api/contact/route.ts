import { sendEmail } from "@/service/email";
import * as yup from "yup";
//  **서버 실행 코드**
const bodyScehma = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
// 서밋이 일어나면서 POST 요청을 함. POST
export async function POST(req: Request) {
  const body = await req.json();
  // 서버에서 받은 JSON 데이터를 js 객체로 파싱
  console.log(body, "body");
  // { from: 'dbsrjsgh11@naver.com', subject: '윤건호', message: 'ㄴㅇ' }
  // req 요청이 들어오면 그걸 JSON 으로 파싱
  if (!bodyScehma.isValidSync(body)) {
    // body가 가지고 있는 데이터 타입이 bodyScehma 조건이랑 맞는지 비교
    return new Response(JSON.stringify({ message: "유효하지 않은 포멧" }), {
      status: 400,
    });
    // 맞지 않다면 400 클라이언트에서 정보를 잘못 입력함. 조건에 위배된다.
  }
  // 조건이 다 맞다면, 이제 서버쪽 성공 / 실패에 관한 로직 처리
  // sendEmail의 함수에 위에 담은 데이터 전달 //
  return sendEmail(body)
    .then(() => {
      return new Response(
        JSON.stringify({ message: "메세지 전송에 성공했습니다" }),
        {
          status: 200,
        }
      );
    })
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: "메세지 전송이 실패했습니다." }),
        {
          status: 500,
        }
      );
    });
}

// contact api route 에서 실행되는 코드는 서버에서 실행되는 코드임
// 그렇기 때문에 해당 코드에서 노드 메일러를 사용해 메일을 보낼 수 있음
// 어느 환경에서 실행되는건지를 잘 생각해보자
// 서버에서 반응하는 데이터는 무조건 JSON format 으로 message와 메세지가 보내지게 해줄거임

//  .then(() => {
//       new Response(JSON.stringify({ message: "메세지 전송에 성공했습니다" }), {
//         status: 200,
//       });
//     })

// .then(() => {
//   return new Response(
//     JSON.stringify({ message: "메세지 전송에 성공했습니다" }),
//     {
//       status: 200,
//     }
//   );
// })
// 중괄호 리턴 , 화살표 함수 바로 쓰기
