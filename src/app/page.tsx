import Proflie from "@/components/proflie";
import Feature from "@/components/feature";
import SlidePost from "@/components/SlidePost";

export default function HomePage() {
  return (
    <>
      <Proflie />
      {/* @ts-expect-error Async Server Component */}
      <Feature />
      {/* @ts-expect-error Async Server Component */}
      <SlidePost />
    </>
  );
}
