import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import { useWindowSize } from "../hooks";
interface LocomotiveContextType {
  containerRef: React.LegacyRef<HTMLElement>;
}
interface LocomotivePropsType {
  children: React.ReactNode;
  setIsScrolled: Dispatch<SetStateAction<boolean>>;
}

export const LocomotiveContext = createContext<LocomotiveContextType>(
  {} as LocomotiveContextType
);

export const LocomotiveProvider = ({
  children,
  setIsScrolled,
}: LocomotivePropsType) => {
  const containerRef = useRef(null);
  const { isMobile } = useWindowSize();

  return (
    <LocomotiveContext.Provider value={{ containerRef }}>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          multiplier: 0.5,
          smartphone: {
            smooth: false,
          },
        }}
        onLocationChange={(scroll: any) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
        containerRef={containerRef}
      >
        <main data-scroll-container id="scroll-container" ref={containerRef}>
          {isMobile && <InvChild3 setIsScrolled={setIsScrolled} />}
          {!isMobile && <InvChild setIsScrolled={setIsScrolled} />}
          {children}
        </main>
      </LocomotiveScrollProvider>
    </LocomotiveContext.Provider>
  );
};

const InvChild3 = ({ setIsScrolled }: any) => {
  const handler = (e: any) => {
    setIsScrolled(e.target.scrollingElement.scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return <></>;
};

const InvChild = ({ setIsScrolled }: any) => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (e: any) => {
      setIsScrolled(e.scroll.y > 0);
    });

    return () => {
      scroll.off("scroll");
    };
  }, [scroll, setIsScrolled]);

  return <></>;
};

export const useLocomotiveContext = () => useContext(LocomotiveContext);
