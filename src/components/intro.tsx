export const Intro = () => {
  return (
    <div data-scroll-section>
      <div
        className="flex flex-col-reverse md:flex-row"
        style={{
          height: "80vh",
          width: "100vw",
          left: 0,
        }}
      >
        <div className="bg-primary flex flex-col justify-center  container-left-gap gap-4 w-full h-2/3 md:w-2/3 md:h-full">
          <div
            className="text-secondary"
            style={{
              fontSize: "48px",
              fontFamily: "Inter",
              fontWeight: "700",
            }}
          >
            <div className="text-primary">
              Mobile
              <span className="text-secondary">{` + `}</span>
              FullStack
            </div>
            <div className="text-secondary">
              Developer
              <span className="text-primary">{`.`}</span>
            </div>
          </div>
          <div
            className="text-secondary"
            style={{
              fontSize: "16px",
            }}
          >
            Where innovation meets creativity in the world of
            <br />
            <span className="text-primary">web design </span>
            and
            <span className="text-primary"> development.</span>
          </div>
        </div>
        <div className="bg-secondary relative w-full h-1/3 md:w-1/3 md: h-full">
          <div className=" w-80  h-80 aspect-square bg-white relative translate-y-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 ">
            <img
              className="w-80 h-80 object-cover object-top absolute z-10"
              src="/assets/me.JPG"
            />
            <div>
              <img src="profile-back.svg" className="absolute scale-150" />
            </div>
            <div className="w-80 h-80 border border-white translate-x-5 translate-y-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
