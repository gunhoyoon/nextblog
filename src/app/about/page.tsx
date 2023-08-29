import React from "react";
import Proflie from "../../components/proflie";

export default function AboutPage() {
  return (
    <>
      <Proflie />
      <div className="mx-28 bg-gray-100 p-10 mb-10">
        <div className="text-center">
          <dl className="mb-2">
            <dt className="mb-2 text-xl">Who am I ?</dt>
            <dd>개발을 사랑하는 프론트엔드 개발자</dd>
            <dd>사람과 디자인을 담는 웹앱을 만들고 있음</dd>
          </dl>
          <dl className="mb-2">
            <dt className="mb-2 text-xl">Career</dt>
            <dd>삼송존자-2019</dd>
            <dd>메이스북-2021</dd>
          </dl>
          <dl className="mb-2">
            <dt className="mb-2 text-xl">Skills</dt>
            <dd>React,vue,Node</dd>
            <dd>Git, Clean Code</dd>
            <dd>VS Code, intellij, MongoDB</dd>
          </dl>
        </div>
      </div>
    </>
  );
}
