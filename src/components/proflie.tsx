import React from "react";
import ProfileImage from "../../public/blog/images/profile.png";
import Image from "next/image";
import Link from "next/link";

export default function Proflie() {
  return (
    <div className="text-center mb-3">
      <Image
        className="rounded-full w-40 h-40 mx-auto"
        src={ProfileImage}
        alt="Proflie"
      />
      <h2 className="text-2xl font-bold">Hi, I&#39;m 건호</h2>
      <p className="font-medium text-xl">Front-end engineer</p>
      <p>개발자 호소인</p>
      <Link
        className="p-1.5 bg-yellow-500 rounded-xl text-xs font-bold mb-3"
        href="/contact"
      >
        Contact Me
      </Link>
    </div>
  );
}
