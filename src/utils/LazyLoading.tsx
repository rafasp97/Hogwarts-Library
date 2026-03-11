"use client";

import { useInView } from "react-intersection-observer";
import { ILazyLoading } from "@/interface/LazyLoading.Interface";

export const LazyLaoding =({
  children,
  rootMargin = "100px",
}: ILazyLoading) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin,
  });

  return <div ref={ref}>{inView && children}</div>;
}