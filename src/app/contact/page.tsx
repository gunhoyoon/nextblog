import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React, { FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "건호에게 메일 보내기",
};
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-3xl my-2">Contact Me</h2>
      <p className="mb-3">dbsrjsgh11@naver.com</p>
      <a
        className="inline-block text-4xl mb-5"
        href={"https://github.com/gunhoyoon"}
        target="_blank"
      >
        <AiFillGithub className="hover:text-yellow-200" />
      </a>
      {/* 요약 페이지 내부 이동 Link , 외부이동 a 태그
        <a> 태그는 검색 엔진 최적화에 중요한 역할을 합니다. 
        검색 엔진은 <a> 태그를 사용하여 웹 페이지를 크롤링하고 인덱싱하므로, 
        외부 링크를 <a> 태그로 작성하면 검색 엔진이 해당 링크를 따라갈 수 있습니다.  */}
      {/*  해당 링크로 사용해야할 부분이 많다면 반복해서 Link태그를 사용하는 것이 아닌 더미 데이터화 시켜서 맵을 이용해 그려주는 것도
        고려해볼만 함, 더미 데이터로 사용할 부분과 서버에서 데이터를 통해 받아와야할 부분을 고려해서 사용하면 좋음 */}
      <p className="font-bold text-2xl">Or Send me an email</p>
      <ContactForm />
    </section>
  );
}
