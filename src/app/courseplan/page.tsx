"use client";
import { Header } from "@/components";
import { LocomotiveProvider } from "@/contexts";
import { useState } from "react";
import Image from "next/image";

const CoursePlan = () => {
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
              <h1>Course Plan</h1>
            </div>
            <div className="relative aspect-video">
              <Image src="/assets/course-plan.png" fill alt="courseplan" />
            </div>
          </div>
        </div>
      </div>
    </LocomotiveProvider>
  );
};
export default CoursePlan;
