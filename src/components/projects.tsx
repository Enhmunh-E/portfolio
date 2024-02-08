import { works } from "@/assets";
import { useWindowSize } from "@/hooks";
import Image from "next/image";
import Title from "./title";
export const Projects = () => {
  return (
    <div
      data-scroll-section
      className="container-left-gap flex flex-col container-right-gap pb-9 relative"
    >
      <div
        className="flex flex-col  px-4 md:px-0"
        id="project-container"
        style={{
          borderRadius: "8px",
        }}
      >
        <div className="pb-8">
          <Title>My Works</Title>
        </div>

        <div className="flex flex-col gap-16">
          {works.map(({ title, projects }, index) => (
            <div key={index}>
              <div className="text-secondary text-xl  font-semibold pb-8 lg:text-3xl">
                {title
                  .split(" ")
                  .splice(0, title.split(" ").length - 1)
                  .join(" ")}
                <span className="text-primary">
                  {" " + title.split(" ")[title.split(" ").length - 1]}
                </span>
              </div>
              <div className="flex flex-col gap-16">
                {projects.map((project, ind) => (
                  <Project {...project} index={ind} key={ind} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type ProjectType = {
  source: string;
  title: string;
  purpose: string;
  desc: string;
  index: number;
};

const Project = ({ source, title, purpose, desc, index }: ProjectType) => {
  const { isDesktop } = useWindowSize();
  if (isDesktop) {
    return (
      <div
        className={`flex ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}
      >
        <div className=" h-96 z-10 w-1/2">
          <div
            style={{
              width: "120%",
              height: "80%",
              marginRight: index % 2 == 0 ? "-20%" : "0%",
              marginLeft: index % 2 == 1 ? "-20%" : "0%",
              marginTop: "10%",
              borderRadius: "8px",
              border: "0.5px solid rgba(255, 255, 255, 0.50)",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(2px)",
              padding: "32px",
              paddingRight: "30%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                color: "#FFF",
                // fontFamily: "Roboto",
                fontSize: "32px",
                fontWeight: "600",
                lineHeight: "125%",
              }}
            >
              {title}
            </div>
            <div
              style={{
                color: "#01C36A",
                // fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "125%",
              }}
            >
              {purpose}
            </div>
            <div
              style={{
                color: "#C0C0C0",
                // fontFamily: "Roboto",
                fontSize: "18px",
                fontStyle: "normal",
                lineHeight: "125%",
              }}
            >
              {desc}
            </div>
          </div>
        </div>
        <div
          className="w-2/3"
          style={{
            position: "relative",
          }}
        >
          <Image src={source} alt={title} layout="fill" objectFit="cover" />
        </div>
      </div>
    );
  }
  return (
    <div
      className={`flex ${
        index % 2 == 0 ? "flex-row" : "flex-row-reverse"
      } relative pb-8`}
    >
      <div
        className={`z-10 absolute -bottom-8 ${
          index % 2 == 0 ? "ml-8" : "mr-8"
        }`}
      >
        <div
          style={{
            borderRadius: "8px",
            border: "0.5px solid rgba(255, 255, 255, 0.50)",
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(2px)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            className=" text-lg"
            style={{
              color: "#FFF",
              // fontFamily: "Roboto",
              fontWeight: "600",
              lineHeight: "125%",
            }}
          >
            {title}
          </div>
          <div
            className=" text-sm"
            style={{
              color: "#01C36A",
              // fontFamily: "Roboto",
              fontWeight: "400",
              lineHeight: "125%",
            }}
          >
            {purpose}
          </div>
          <div
            className="text-sm"
            style={{
              color: "#C0C0C0",
              fontStyle: "normal",
              lineHeight: "125%",
            }}
          >
            {desc}
          </div>
        </div>
      </div>
      <div
        className={`w-full h-64 md:h-96 ${index % 2 == 0 ? "mr-8" : "ml-8"}`}
        style={{
          position: "relative",
        }}
      >
        <Image src={source} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};
