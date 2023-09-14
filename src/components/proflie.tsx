import React from "react";
import ProfileImage from "../../public/blog/images/profile.png";
import Image from "next/image";
import Link from "next/link";

export default function Proflie() {
  return (
    <section className="text-center mb-3">
      <Image
        className="mx-auto"
        src={ProfileImage}
        alt="Proflie"
        width={250}
        height={250}
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
    </section>
  );
}
