"use client";
import { AboutMe, Intro, NavButton, Projects } from "@/components";
import { LocomotiveProvider } from "@/contexts";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState<number[] | null>(null);
  useEffect(() => {
    const mousePositionChange = (e: MouseEvent) => {
      setMousePosition([Number(e.clientX), Number(e.clientY)]);
    };
    window.addEventListener("mousemove", mousePositionChange);
    return () => window.removeEventListener("mousemove", mousePositionChange);
  }, []);
  return (
    <LocomotiveProvider setIsScrolled={setIsScrolled}>
      <div data-scroll-container className="bg-default">
        <div id="blur"></div>
        <div
          id="blob"
          style={{
            position: "absolute",
            top: mousePosition?.[1] || 0,
            left: mousePosition?.[0] || 0,
          }}
        />
        <div id="nav-container">
          <div
            data-scroll-sticky
            data-scroll-target="#nav-container"
            className="fixed top-0 w-full z-50"
            style={{
              backdropFilter: isScrolled ? "blur(10px)" : "none",
              background: isScrolled ? "rgba(0,0,0,0.5)" : "none",
              transition: "all 500ms",
            }}
          >
            <div
              className={`container ${
                isScrolled ? "h-32" : "h-48"
              } flex items-center justify-between`}
              style={{
                transition: "all 500ms",
              }}
            >
              <Image
                src="assets/title.svg"
                height={53}
                width={188}
                alt="logo"
              />
              <NavButton />
            </div>
          </div>
          <Intro />
          <AboutMe />
          <Projects />
        </div>
      </div>
    </LocomotiveProvider>
  );
};

export default Home;
