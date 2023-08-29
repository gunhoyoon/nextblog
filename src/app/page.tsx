import React from "react";
import Proflie from "../components/proflie";
import MultiCarousel from "../components/MultiCarousel";
import Feature from "../components/feature";
import SlidePost from "../components/SlidePost";

export default function HomePage() {
  return (
    <>
      <Proflie />
      {/* @ts-expect-error Async Server Component */}
      <Feature />
      {/* @ts-expect-error Async Server Component */}
      <SlidePost />
    </>
  );
}
// 데이터를 가져오는 단계에서 서버컴포넌트를 사용하기 때문에 해당 컴포넌트를 클라이언트 컴포넌트인 ㅋㅐ러셀의 칠드런으로 받아서
// 케러셀의 아이템으로 렌더링 시켜줬는데
// 그 데이터 자체가 전부 클라이언트 컴포넌트를 사용하게 되면 프롭으로 받을 필요가 없이 해당 컴포넌트 안에서 직접 데이터를 넣어주거나
// 데이터만 가진 클라이언트 컴포넌트를 따로 임포트해서 그냥 사용할 수 있게됨
