"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
export default function ContactPage() {
  const [text, setText] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="text-center flex-col">
        <h2 className="font-bold text-3xl mb-2">Contact Me</h2>
        <p className="mb-2">dbsrjsgh11@naver.com</p>
        <Link
          className="inline-block text-4xl mb-5"
          href={"https://github.com/gunhoyoon"}
        >
          <AiFillGithub className="hover:text-yellow-200" />
        </Link>
        <p className="font-bold text-2xl">Or Send me an email</p>
      </div>
      <form onSubmit={handleSubmit} action="/" method="POST">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setText({
              ...text,
              email: e.target.value,
            });
          }}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          onChange={(e) => {
            setText({
              ...text,
              subject: e.target.value,
            });
          }}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={(e) => {
            setText({
              ...text,
              message: e.target.value,
            });
          }}
        />
        <button
          type="submit"
          onClick={() => {
            console.log(text);
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
