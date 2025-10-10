'use client'
import { useState } from "react";

export const useSlider = <T>(items?: T[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (!items || items.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    if (!items || items.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return { currentIndex, handlePrev, handleNext };
};
