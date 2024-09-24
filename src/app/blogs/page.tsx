"use client";
import {
  CloudComputing,
  Header,
  ProgrammingLanguages,
  RandyPausch,
  SecurityBreachesQatar,
  TheoryOfComputation,
} from "@/components";
import { LocomotiveProvider } from "@/contexts";
import Link from "next/link";
import { useState } from "react";

const Blogs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
          <div className="container-left-gap flex flex-col container-right-gap pb-9 relative text-white max-lg:px-4  pt-[128px] lg:pt-[168px] gap-8">
            <div
              data-scroll-section
              className="font-oswald text-secondary text-2xl font-bold flex flex-col justfify-center lg:text-5xl lg:justify-normal"
            >
              <h1>Blogs</h1>
            </div>
            <TheoryOfComputation />
            <CloudComputing />
            <ProgrammingLanguages />
            <SecurityBreachesQatar />
            <RandyPausch />
          </div>
        </div>
      </div>
    </LocomotiveProvider>
  );
};

export default Blogs;
