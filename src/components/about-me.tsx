import { skills } from "@/assets";
import { useWindowSize } from "@/hooks";
import Image from "next/image";

type SkillType = {
  name: string;
  source: string;
};

export const AboutMe = () => {
  const { isMobile } = useWindowSize();
  return (
    <div
      // style={{
      //   height: "100vh",
      // }}
      data-scroll-section
      className="container-left-gap container-right-gap py-24 "
    >
      <div
        // data-scroll
        // data-scroll-speed="2"
        className="text-secondary flex flex-row pb-4 lg:pb-8 text-2xl font-bold px-4 md:px-0 lg:text-5xl"
        style={{
          fontFamily: "Inter",
          gap: 6,
        }}
      >
        <div className="text-primary">Experience</div>
        <span className="text-secondary">
          & Skills
          <span className="text-primary">{`.`}</span>
        </span>
      </div>
      <div
        data-scroll
        data-scroll-speed={isMobile ? "1" : "2"}
        className="flex flex-col gap-6 px-4 md:px-0 lg:flex-row lg:gap-0"
      >
        <ul className="flex flex-1 flex-col">
          <ListItem
            year="2023 - Present"
            positions={[
              {
                position: "Developer & Master Teacher",
                organization: "Pinecone Academy",
                type: "Paid-Work",
              },
            ]}
          />
          <ListItem
            year="2022 - 2023"
            positions={[
              {
                position: "Developer & Master Teacher",
                organization: "Pinecone Academy",
                type: "Paid-Work",
              },
              {
                position: "Instructor",
                organization: "Nest Academy",
                type: "Paid-Work",
              },
              {
                position: "Co-Founder & CTO",
                organization: "Tuuri.mn",
                type: "Volunteer",
              },
              {
                position: "...",
                organization: "",
                type: "",
              },
            ]}
          />
          <ListItem
            last={true}
            year="2021 - 2022"
            positions={[
              {
                position: "Instructor",
                organization: "Nest Academy",
                type: "Volunteer",
              },
              {
                position: "Co-Founder & Lead Developer",
                organization: "Vici. Mag",
                type: "Volunteer",
              },
              {
                position: "...",
                organization: "",
                type: "",
              },
            ]}
          />
        </ul>
        <div className="flex flex-1">
          <div className="text-secondary flex flex-col text-xl gap-8">
            {skills.map(({ level, skills }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <div className="text-secondary text-xl lg:text-2xl">
                  {level} in:
                </div>
                <div className="flex flex-row gap-4">
                  <div className={isMobile && index == 0 ? "logos-slide" : ""}>
                    <div
                      className={`flex flex-row gap-4 ${
                        isMobile ? "" : "flex-wrap"
                      }`}
                    >
                      {skills.map((skill: SkillType, index2: number) => (
                        <div
                          className="flex flex-col gap-2 items-center"
                          key={index2}
                        >
                          <div
                            className="w-12 h-12 flex items-center justify-center rounded-full"
                            style={{
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <Image
                              src={skill.source}
                              width={32}
                              height={32}
                              alt={skill.name}
                            />
                          </div>
                          <div className=" text-xs">{skill.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {isMobile && index == 0 && (
                    <div className="logos-slide">
                      <div className="flex flex-row gap-4">
                        {skills.map((skill: SkillType, index2: number) => (
                          <div
                            className="flex flex-col gap-2 items-center"
                            key={index2}
                          >
                            <div
                              className="w-12 h-12 flex items-center justify-center rounded-full"
                              style={{
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                              }}
                            >
                              <Image
                                src={skill.source}
                                width={32}
                                height={32}
                                alt={skill.name}
                              />
                            </div>
                            <div className="text-xs">{skill.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({
  skillPercentage,
  skillName,
}: {
  skillPercentage: number;
  skillName: string;
}) => {
  return (
    <div>
      <div>{skillName}</div>
      <div>{skillPercentage}</div>
    </div>
  );
};

const ListItem = ({
  year,
  positions,
  last = false,
}: {
  last?: boolean;
  year: string;
  positions: {
    position: string;
    organization: string;
    type: string;
  }[];
}) => {
  return (
    <li className="flex flex-row gap-6">
      <div className="relative w-4">
        <div
          className="bg-quaternary"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        ></div>
        <div
          className="bg-quaternary"
          style={{
            opacity: 0.5,
            position: "absolute",
            width: "2px",
            height: "100%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>
      <div className="flex flex-col">
        <div className={!last ? "pb-10" : "pb-4"}>
          <div className="text-quaternary text-sm pb-6 opacity-50">{year}</div>
          <div className="flex flex-col gap-5">
            {positions.map(({ position, organization, type }, index) => (
              <div key={index}>
                <div className="text-secondary text-xl pb-2">{position}</div>
                {organization === "" && type === "" ? (
                  <div></div>
                ) : (
                  <div className="text-quaternary text-xs">
                    <span className="opacity-50">{organization} /</span>
                    <span className="text-primary">{` ${type}`}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default AboutMe;
