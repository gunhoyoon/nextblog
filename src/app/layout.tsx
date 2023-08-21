import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
const sans = Open_Sans({ subsets: ["latin"] });
// sans {
//   style: {
//     fontFamily: "'__Open_Sans_f3cbcc', '__Open_Sans_Fallback_f3cbcc'",
//     fontStyle: 'normal'
//   },
//   className: '__className_f3cbcc'
// }
// console.log("sans", sans);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
