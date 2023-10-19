type Skill = {
  name: string;
  source: string;
};

type skillsType = {
  level: string;
  skills: Skill[];
};

export const skills: skillsType[] = [
  {
    level: "Expert",
    skills: [
      {
        name: "React Native",
        source: "assets/expert/reactNative.svg",
      },
      {
        name: "Typescript",
        source: "assets/expert/typescript.svg",
      },
      {
        name: "GatsbyJS",
        source: "assets/expert/gatsbyJs.svg",
      },
      {
        name: "React Js",
        source: "assets/expert/reactJs.svg",
      },
      {
        name: "HTML/CSS",
        source: "assets/expert/web.svg",
      },
      {
        name: "Javascript",
        source: "assets/expert/javascript.svg",
      },
      {
        name: "Firebase",
        source: "assets/expert/firebase.svg",
      },
      {
        name: "NextJs",
        source: "assets/expert/nextJs.svg",
      },
      {
        name: "Sass",
        source: "assets/expert/sass.svg",
      },
      {
        name: "MUI",
        source: "assets/expert/mui.svg",
      },
      {
        name: "Tailwind",
        source: "assets/expert/tailwind.svg",
      },
      {
        name: "Bootstrap",
        source: "assets/expert/bootstrap.svg",
      },
      {
        name: "Git",
        source: "assets/expert/github.svg",
      },
    ],
  },
  {
    level: "Advanced",
    skills: [
      {
        name: "Contentful",
        source: "assets/advanced/contentful.svg",
      },
      {
        name: "Gitlab",
        source: "assets/advanced/gitlab.svg",
      },
      {
        name: "MongoDB",
        source: "assets/advanced/mongoDB.svg",
      },
      {
        name: "C++",
        source: "assets/advanced/cpp.svg",
      },
      {
        name: "Expo",
        source: "assets/advanced/expo.svg",
      },
    ],
  },
  {
    level: "Experienced",
    skills: [
      {
        name: "GraphQL",
        source: "assets/experienced/graphQL.svg",
      },
      {
        name: "NestJs",
        source: "assets/experienced/nestJs.svg",
      },
      {
        name: "Serverless",
        source: "assets/experienced/serverless.svg",
      },
      {
        name: "AWS",
        source: "assets/experienced/aws.svg",
      },
      {
        name: "Jest",
        source: "assets/experienced/jest.svg",
      },
    ],
  },
];

export const works = [
  {
    title: "in the field of Education",
    projects: [
      {
        source: "/assets/poster/Tuuri.mn.png",
        title: "Tuuri.mn",
        purpose: "Digitalize Mongolian history and inform people",
        desc: "Database Integration;",
      },
      {
        source: "/assets/poster/Vici.Mag.png",
        title: "Vici.Mag",
        purpose: "Provide opportunities and knowledge to Mongolian students",
        desc: "English/Mongolian integration; Web/Database Structure; Home, Blog, College pages made; Pagination and Contentful integration; SEO",
      },
      {
        source: "/assets/poster/KnowShare.png",
        title: "KnowShare",
        purpose: "",
        desc: "English/Mongolian integration; Web/Database Structure; Home, Blog, College pages made; Pagination and Contentful integration; SEO",
      },
    ],
  },
  {
    title: "in Health",
    projects: [
      {
        source: "/assets/poster/HelloLady.png",
        title: "HelloLady",
        purpose: "Digitalize Mongolian history and inform people",
        desc: "Database Integration;",
      },
      {
        source: "/assets/poster/WeCare.png",
        title: "WeCare",
        purpose: "Provide opportunities and knowledge to Mongolian students",
        desc: "English/Mongolian integration; Web/Database Structure; Home, Blog, College pages made; Pagination and Contentful integration; SEO",
      },
    ],
  },
  {
    title: "for the Public",
    projects: [
      {
        source: "/assets/poster/RideShare.png",
        title: "RideShare",
        purpose: "Digitalize Mongolian history and inform people",
        desc: "Database Integration;",
      },
      {
        source: "/assets/poster/DevSummit.png",
        title: "DevSummit",
        purpose:
          "Bridge between local developer and developers around the world",
        desc: "English/Mongolian integration; Web/Database Structure; Home, Blog, College pages made; Pagination and Contentful integration; SEO",
      },
    ],
  },
];
