"use client";
import Carousel from "react-multi-carousel";
import React from "react";
import Server from "./Server";

//  외부 라이브러리를 별도의 컴포넌트를 만들어서 처리해줌
// 상태 관리 , 이벤트 처리가 필요한 클라이언트 컴포넌트를 사용할 때 최소한의 크기로 만들어줌

// type Props = {
//   children: React.ReactNode;
// };

export default function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      centerMode={true}
      infinite={true}
      autoPlay={true}
    >
      <Server />
      {/* {children} */}
    </Carousel>
  );
}

// css shadow , 상세 페이지 구현 , 클릭시 상세 페이지 이동
// 모든 페이지 푸터고정
