import { works } from "@/assets";
import Image from "next/image";
export const Projects = () => {
  return (
    <div
      data-scroll-section
      className="container-left-gap flex flex-col container-right-gap pb-9 relative"
    >
      <div
        className="flex flex-col flex-1 p-8 rounded-lg"
        id="project-container"
        style={{
          borderRadius: "8px",
          border: "1px solid #2D2D2D",
          background: "rgba(33, 33, 33, 0.50)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div
          // data-scroll
          // data-scroll-sticky
          // data-scroll-target="#project-container"
          className="text-primary text-4xl left-0 pb-8"
          style={{
            fontFamily: "Inter",
            fontWeight: "700",
            lineHeight: "100%",
          }}
        >
          My works
        </div>
        <div className="flex flex-col gap-16">
          {works.map(({ title, projects }, index) => (
            <div key={index}>
              <div className="text-secondary text-3xl font-semibold pb-8">
                {title}
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
  return (
    <div className={`flex ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
      <div className="w-1/2 h-96 z-10">
        <div
          style={{
            width: "120%",
            height: "80%",
            marginRight: index % 2 == 0 ? "-20%" : "0%",
            marginLeft: index % 2 == 1 ? "-20%" : "0%",
            marginTop: "10%",
            borderRadius: "8px",
            border: "0.5px solid rgba(255, 255, 255, 0.50)",
            background: "rgba(0, 0, 0, 0.50)",
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
          backgroundImage: `url(${source})`,
          backgroundSize: "cover",
        }}
      >
        {/* <Image src={source} alt={title} layout="fill" objectFit="cover" /> */}
      </div>
    </div>
  );
};
