"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JSbasic from "../../public/blog/images/posts/javascript-basic.png";
import NodeBasic from "../../public/blog/images/posts/node-basic.png";
import Review_2021 from "../../public/blog/images/posts/review-2021.png";
import Review_2022 from "../../public/blog/images/posts/review-2022.png";
import Image from "next/image";
import Link from "next/link";

export default function Slide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mx-20 mb-20 text-center">
      <p className="text-left font-bold">You may like</p>
      <Carousel
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
      >
        <div>
          <Image src={JSbasic} alt="javascript-basic" />
          <p className="text-right">2022-08-31</p>
          <dl>
            <dt>자바스크립트 기초 문법</dt>
            <dd>기본 문법부터 사용하는 실전까지 최종정리</dd>
          </dl>
          <span className="bg-blue-200 p-1.5 text-xs rounded-xl inline-block mb-2">
            javascript
          </span>
        </div>
        <div>
          <Link href="/">
            <Image src={NodeBasic} alt="NodeBasic" />
            <p className="text-right">2022-05-31</p>
            <dl>
              <dt>Node 기초 정리</dt>
              <dd>기본적인 node 사용법에 대해 전부 정리!</dd>
            </dl>
            <span className="bg-blue-200 p-1.5 text-xs rounded-xl">
              backend
            </span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image src={Review_2021} alt="Review_2021" />
            <p className="text-right">2021-02-31</p>
            <dl>
              <dt>2021년 리뷰</dt>
              <dd>2021년 한 해 동안 배운 기술 리뷰!</dd>
            </dl>
            <span className="bg-blue-200 p-1.5 text-xs rounded-xl">
              my story
            </span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image src={Review_2022} alt="Review_2022" />
            <p className="text-right">2022-12-31</p>
            <dl>
              <dt>2022년 리뷰</dt>
              <dd>2022년 한 해 동안 배운 기술 리뷰!</dd>
            </dl>
            <span className="bg-blue-200 p-1.5 text-xs rounded-xl">
              my story
            </span>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

// css shadow , 상세 페이지 구현 , 클릭시 상세 페이지 이동
// 모든 페이지 푸터고정
