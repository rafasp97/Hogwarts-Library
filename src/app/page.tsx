"use client";
import HomeView from "@/views/HomeView/HomeView";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const  lazyLoadingConfig = (importer: () => Promise<any>) => {
  const Component = dynamic(importer);

  return function LazyComponent() {
    const { ref, inView } = useInView({
      triggerOnce: true,
      rootMargin: "200px",
    });

    return (
      <div ref={ref}>
        {inView && <Component />}
      </div>
    );
  };
}

const HouseView = lazyLoadingConfig(() => import("@/views/HouseView/HouseView"));

export default function HomePage() {
  return (
    <>
      <HomeView />
      <HouseView/>
    </>
  );
}