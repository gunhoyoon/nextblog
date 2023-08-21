import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between mt-5 mx-20">
      <h1 className="text-2xl font-bold">{"건호's 블로그"}</h1>
      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
