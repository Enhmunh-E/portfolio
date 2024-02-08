"use client";
import {
  AboutMe,
  ContactMe,
  Footer,
  Header,
  Intro,
  NavButton,
  Projects,
} from "@/components";
import { LocomotiveProvider } from "@/contexts";
import Image from "next/image";
import { useEffect, useState } from "react";

const MyApp = () => {
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
        {/* <div
          id="blob"
          style={{
            position: "absolute",
            top: mousePosition?.[1] || 0,
            left: mousePosition?.[0] || 0,
          }}
        /> */}
        <div id="nav-container">
          <Header isScrolled={isScrolled} />
          <Intro />
          <AboutMe />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </LocomotiveProvider>
  );
};

export default MyApp;
