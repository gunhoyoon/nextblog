// import { sendEmail } from "@/service/email";
// import * as yup from "yup";

// const bodySchema = yup.object().shape({
//   from: yup.string().email().required(),
//   // 스트링 + 이메일 형태 + 값이 있어야된다
//   subject: yup.string().required(),
//   // 스트링 형태 + 값이 있어야된다
//   message: yup.string().required(),
//   // 스트링 형태 + 값이 있어야된다
// });
// // 데이터 형태 정하기

// export async function POST(requset: Request) {
//   const body = await requset.json();
//   if (!bodySchema.isValidSync(body)) {
//     return new Response(JSON.stringify({ message: "유효하지 않은 포멧" }), {
//       status: 400,
//     });
//   }
//   // 노드 메일러를 이용해서 메일을 전송하면 됨
//   return sendEmail(body) //
//     .then(
//       () =>
//         new Response(
//           JSON.stringify({ message: "메일을 성공적으로 보냈습니다" }),
//           { status: 200 }
//         )
//     )
//     .catch((error) => {
//       console.log(error);
//       return new Response(
//         JSON.stringify({ message: "메일 전송에 실패하였습니다" }),
//         { status: 500 }
//       );
//     });
// }
import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송에 실패함!" }), {
      status: 400,
    });
  }
  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냈음" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: "메일 전송에 실패함!" }), {
        status: 500,
      });
    });
}

// contact api route 에서 실행되는 코드는 서버에서 실행되는 코드임
// 그렇기 때문에 해당 코드에서 노드 메일러를 사용해 메일을 보낼 수 있음
// 어느 환경에서 실행되는건지를 잘 생각해보자

// 서버에서 반응하는 데이터는 무조건 JSON format 으로 message와 메세지가 보내지게 해줄거임
