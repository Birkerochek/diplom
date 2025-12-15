"use client";

import { useCallback, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type GenerateOptions = {
  filename?: string;
};

export const useCertificateGenerator = ({ filename = "certificate.pdf" }: GenerateOptions = {}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = useCallback(
    async (element: HTMLElement | null) => {
      if (!element || isGenerating) {
        return;
      }

      try {
        setIsGenerating(true);
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: "#ffffff",
          useCORS: true,
        });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = (canvas.height * pageWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight, undefined, "FAST");
        pdf.save(filename);
      } finally {
        setIsGenerating(false);
      }
    },
    [filename, isGenerating]
  );

  return {
    generate,
    isGenerating,
  };
};
