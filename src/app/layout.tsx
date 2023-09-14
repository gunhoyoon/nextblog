import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
const sans = Open_Sans({ subsets: ["latin"] });
// sans {
//   style: {
//     fontFamily: "'__Open_Sans_f3cbcc', '__Open_Sans_Fallback_f3cbcc'",
//     fontStyle: 'normal'
//   },
//   className: '__className_f3cbcc'
// }
// console.log("sans", sans);

export const metadata = {
  // SEO
  title: {
    default: "건호의 블로그",
    template: "건호의 블로그 | %s",
  },
  description: "프론트엔드 개발자 윤건호의 블로그",
  icons: {
    icon: "/favicon.ico",
    // /favicon.ico 로 작성해도 Nextjs 앱 빌드시 자동으로 경로 처리를 해준다고 함
    // 기존 favicon.ico 파일을 지우고 내 사진으로 favicon.ico 로 설정하려했으나 바로 안바뀜, 캐시 비우고 강력 새로고침 하니 됐음
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
