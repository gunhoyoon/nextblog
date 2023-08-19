import Link from "next/link";
import styles from "./page.module.css";
import Proflie from "@/components/proflie";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Slide from "@/components/slide";

export default function Home() {
  return (
    <>
      <Proflie />
      <Feature />
      <Slide />
      <Footer />

      <div></div>
    </>
  );
}
