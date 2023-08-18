import React from "react";
import Practice from "../../public/blog/images/posts/best-react-practices.png";
import ReactVersion from "../../public/blog/images/posts/react18-walkthrough.png";
import Review_2023 from "../../public/blog/images/posts/review-2023.png";
import NodeTip from "../../public/blog/images/posts/node-pro-tips.png";
import JsTip from "../../public/blog/images/posts/javascript-10-tips.png";
import Image from "next/image";
export default function Feature() {
  return (
    <div className="mx-20">
      <p className="font-bold mb-1">Featured Posts</p>
      <ul className="flex text-center gap-6">
        <li className="w-4/12">
          <div className="rounded-full">
            <Image
              className="w-full h-50"
              src={Review_2023}
              alt="2023-Review"
            />
            <p className="text-right">2023-12-31</p>
            <dl>
              <dt>2023년 리뷰</dt>
              <dd>2023년 한해 동안 배운 기술들, 생각들 정리</dd>
            </dl>
            <p>my story</p>
          </div>
        </li>
        <li className="w-4/12">
          <div>
            <Image
              className="w-full h-50"
              src={ReactVersion}
              alt="2023-Review"
            />
            <p className="text-right">2023-12-31</p>
            <dl>
              <dt>2023년 리뷰</dt>
              <dd>2023년 한해 동안 배운 기술들, 생각들 정리</dd>
            </dl>
            <p>my story</p>
          </div>
        </li>
        <li className="w-4/12">
          <div>
            <Image className="w-full h-50" src={Practice} alt="2023-Review" />
            <p className="text-right">2023-12-31</p>
            <dl>
              <dt>2023년 리뷰</dt>
              <dd>2023년 한해 동안 배운 기술들, 생각들 정리</dd>
            </dl>
            <p>my story</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
