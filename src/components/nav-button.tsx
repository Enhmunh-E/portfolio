"use client";
import { useState } from "react";

export const NavButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer w-12 h-12 flex items-center justify-center"
      onClick={() => setOpen(!open)}
    >
      <button className="relative w-8 h-8 cursor-pointer">
        <div
          className="absolute"
          style={{
            top: "0px",
            right: open ? "-13.25px" : "0px",
            width: open ? "45.25px" : "32px",
            height: "2px",
            background: "white",
            transform: open ? "rotate(45deg)" : "",
            transformOrigin: "left",
            transition: "all 200ms",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            top: "16px",
            right: "0px",
            width: open ? "45.25px" : "22px",
            height: "2px",
            background: "white",
            transition: "all 200ms",
            transform: open ? "translateY(-15.25px) rotate(-45deg)" : "",
            transformOrigin: "right",
          }}
        ></div>
      </button>

      <nav></nav>
    </div>
  );
};

export default NavButton;
