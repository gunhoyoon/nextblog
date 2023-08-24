"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//  외부 라이브러리를 별도의 컴포넌트를 만들어서 처리해줌
// 상태 관리 , 이벤트 처리가 필요한 클라이언트 컴포넌트를 사용할 때 최소한의 크기로 만들어줌

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
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
      {children}

      {/* <SlidePost /> */}
      {/* <div>
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
        </div> */}
    </Carousel>
  );
}

// css shadow , 상세 페이지 구현 , 클릭시 상세 페이지 이동
// 모든 페이지 푸터고정
