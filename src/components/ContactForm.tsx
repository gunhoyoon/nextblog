"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

export default function ContactForm() {
  type Form = {
    from: string;
    subject: string;
    message: string;
  };
  const DEFAULT_DATA = {
    from: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({ message: "메일 전송에 성공했습니다.", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: "메일 전송에 실패했습니다.", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  // 엘리랑 내꺼 비교

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl "
      >
        <label htmlFor="from" className="text-white">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          value={form.from}
          name="from"
          // onChange={(e) => {
          //   setText({
          //     ...text,
          //     from: e.target.value,
          //   });
          // }}
          onChange={onChange}
        />
        <label htmlFor="subject" className="text-white font-semi">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          // onChange={(e) => {
          //   setText({
          //     ...text,
          //     subject: e.target.value,
          //   });
          // }}
          onChange={onChange}
        />

        <label
          htmlFor="message"
          className="
        text-white
        font-semi"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="text-black font-semi "
          rows={10}
          // onChange={(e) => {
          //   setText({
          //     ...text,
          //     message: e.target.value,
          //   });
          // }}
          value={form.message}
          onChange={onChange}
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}
