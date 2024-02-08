import { useWindowSize } from "@/hooks";

export const Intro = () => {
  const { isMobile } = useWindowSize();
  return (
    <div data-scroll-section>
      <div
        className="flex flex-col-reverse lg:flex-row"
        style={{
          height: "80vh",
          width: "100vw",
          left: 0,
        }}
      >
        <div className="bg-primary   flex flex-col justify-center items-center container-left-gap gap-4 w-full h-full lg:w-2/3 lg:items-start">
          <div className="w-60 h-60 aspect-square relative lg:hidden">
            <img
              className="w-60 h-60 object-cover object-top absolute z-10 lg:h-80 lg:w-80"
              src="/assets/me.JPG"
            />
            <div>
              <img src="profile-back.svg" className="absolute scale-150" />
            </div>
            <div className="w-60 h-60 border border-white translate-x-5 translate-y-5 lg:h-80 lg:w-80"></div>
          </div>
          <div className="w-full flex flex-col gap-4 px-4 pt-6 md:px-0 lg:pt-0">
            <div className="font-oswald text-secondary text-2xl font-bold flex flex-col justfify-center lg:text-5xl lg:justify-normal">
              <div className="text-secondary lg:hidden">
                Hi I&apos;m Enkhmunkh.
              </div>
              <div>
                <span className="text-primary">
                  Mobile
                  <span className="text-secondary">{` + `}</span>
                  FullStack
                </span>
                <span className="text-secondary lg:block">
                  Developer
                  <span className="text-primary">{`.`}</span>
                </span>
              </div>
            </div>
            <div
              className="text-secondary"
              style={{
                fontSize: "16px",
                fontFamily: "Inter",
              }}
            >
              Where innovation meets creativity in the world of
              {!isMobile && <br />}
              <span className="text-primary">web design </span>
              and
              <span className="text-primary"> development.</span>
            </div>
          </div>
        </div>
        <div className="bg-secondary relative w-full h-1/3 hidden justify-center lg:w-1/3 lg:h-full lg:justify-normal lg:bg-secondary lg:flex">
          <div className="w-60 h-60 aspect-square relative translate-y-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2  lg:h-80 lg:w-80">
            <img
              className="w-60 h-60 object-cover object-top absolute z-10 lg:h-80 lg:w-80"
              src="/assets/me.JPG"
            />
            <div>
              <img src="profile-back.svg" className="absolute scale-150" />
            </div>
            <div className="w-60 h-60 border border-white translate-x-5 translate-y-5 lg:h-80 lg:w-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
