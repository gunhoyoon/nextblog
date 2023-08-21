import Link from "next/link";
import styles from "./page.module.css";
import Proflie from "@/components/proflie";
import Feature from "@/components/feature";

import Slide from "@/components/slide";

export default function HomePage() {
  return (
    <>
      <Proflie />
      <Feature />
      <Slide />

      <div></div>
    </>
  );
}
