"use client";
import { useEffect, useState } from "react";

export const useWindowWidth = (value: number) => {
  const [windowWidth, setWindowWidth] = useState(value);
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return windowWidth;
};
