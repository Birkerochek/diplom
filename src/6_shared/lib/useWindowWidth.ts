"use client";
import { useEffect, useState } from "react";

export const useWindowWidth = (value: number) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window === "undefined" ? value : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return windowWidth;
};
