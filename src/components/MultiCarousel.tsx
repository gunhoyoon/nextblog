"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type Props = {
  children: React.ReactNode;
};
export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel infinite autoPlay responsive={responsive} itemClass="m-2">
      {children}
    </Carousel>
  );
}

// 칠드런도 프롭의 일부인데 넘겨주는 형태만 좀 다를 뿐이다. 여기선 칠드런이 하나의 컴포넌트처럼 동작할 수 있게되지만,
// 기존에 내가 사용하던 프롭은 해당 컴포넌트의 이벤트나 속성을 넘겨주었던것의 차이일 뿐이다.
// 서버 컴포넌트 내의 필요시 최소한의 클라이언트 컴포넌트 사용
