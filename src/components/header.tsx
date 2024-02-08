import { useWindowSize } from "@/hooks";
import Image from "next/image";
import Button from "./button";
export const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  const { isDesktop } = useWindowSize();
  return (
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
          isScrolled
            ? isDesktop
              ? "h-32"
              : "h-24"
            : isDesktop
            ? "h-48"
            : "h-32"
        } flex items-center justify-between px-4 lg:px-0`}
        style={{
          transition: "all 500ms",
        }}
      >
        <Image
          src="assets/title.svg"
          height={isDesktop ? 53 : 16}
          width={isDesktop ? 188 : 95.33}
          alt="logo"
        />
        <a href="/Enkhmunkh-Resume.pdf">
          <Button>Download Resume</Button>
        </a>
      </div>
    </div>
  );
};
export default Header;
