import { useEffect, useState } from "react";

type WindowSizeType = {
  width: number | null;
  height: number | null;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: null,
    height: null,
  });
  const [dimensionSize, setDimensionSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  useEffect(() => {
    const onWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setDimensionSize({
        isMobile: window.innerWidth <= 480,
        isTablet: window.innerWidth > 480 && window.innerWidth <= 1025,
        isDesktop: window.innerWidth > 1025,
      });
    };
    window.addEventListener("resize", onWindowResize);
    onWindowResize();
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return { ...windowSize, ...dimensionSize };
};

export default useWindowSize;
