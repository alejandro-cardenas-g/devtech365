"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type TMediaQuery = 300 | 480 | 768 | 1000 | 1300;

export const useMediaQuery = (breakpoint: TMediaQuery) => {
  const [isBreak, setIsBreak] = useState(true);

  useEffect(() => {
    if (typeof global.window === "undefined") return;
    setIsBreak(window.innerWidth < breakpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (typeof global.window === "undefined") return;
    const handleResize = () => {
      setIsBreak(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isBreak };
};
