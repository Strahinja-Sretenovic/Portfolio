import { useState, useEffect } from "react";

export type PresentationEdit = "mobile" | "tablet" | "laptop" | "wide";

export interface PresentationDeviceInfo {
  edit: PresentationEdit;
  totalSlides: number;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isWide: boolean;
  isPortrait: boolean;
  isShortHeight: boolean;
  width: number;
  height: number;
}

export function usePresentationEdit(): PresentationDeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<PresentationDeviceInfo>(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1280;
    const h = typeof window !== "undefined" ? window.innerHeight : 800;
    const isMob = w < 768;
    const isTab = w >= 768 && w < 1024;
    const isLap = w >= 1024 && w < 1600;
    const isW = w >= 1600;

    const edit: PresentationEdit = isMob ? "mobile" : isTab ? "tablet" : isW ? "wide" : "laptop";
    const totalSlides = 10; // Unified 10-slide master interactive presentation

    return {
      edit,
      totalSlides,
      isMobile: isMob,
      isTablet: isTab,
      isLaptop: isLap,
      isWide: isW,
      isPortrait: h > w,
      isShortHeight: h <= 700,
      width: w,
      height: h
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMob = w < 768;
      const isTab = w >= 768 && w < 1024;
      const isLap = w >= 1024 && w < 1600;
      const isW = w >= 1600;

      const edit: PresentationEdit = isMob ? "mobile" : isTab ? "tablet" : isW ? "wide" : "laptop";
      const totalSlides = 10;

      setDeviceInfo({
        edit,
        totalSlides,
        isMobile: isMob,
        isTablet: isTab,
        isLaptop: isLap,
        isWide: isW,
        isPortrait: h > w,
        isShortHeight: h <= 700,
        width: w,
        height: h
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceInfo;
}
