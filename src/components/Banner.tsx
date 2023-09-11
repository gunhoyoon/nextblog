import React from "react";

export type BannerData = {
  message: string;
  state: "success" | "error";
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  // 배너의 구조분해 / 배너의 타입은 BannerData 이다
  const isSuccess = state === "success"; // state가 성공한 상태인지
  const icon = isSuccess ? "✅" : "🔥";
  return (
    <p
      className={`p-2 rounded-xl w-full text-center ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      }`}
    >{`${icon} ${message}`}</p>
  );
}
