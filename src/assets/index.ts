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
        purpose: "Digitalize and Revive Mongolian history",
        desc: "Collaborated with a well-known Professor; Made the first local history website; Reached +2k students in Mongolia; Created flexible dynamic website using NextJS, PixiJS, and Contentful",
      },
      {
        source: "/assets/poster/Vici.Mag.png",
        title: "Vici.Mag",
        purpose: "Provide opportunities and knowledge to Mongolian students",
        desc: "Helped 1k+ students worldwide struggling with college apps by providing blogs, interviews, articles; Created multi-language website, led 4 developers, developed using GatsbyJS and Contentful",
      },
      {
        source: "/assets/poster/KnowShare.png",
        title: "KnowShare",
        purpose: "Student engagement platform",
        desc: "Led a team of 4 students to make student platform that is categorized by lessons. Built in post and comment features. I have integrated database with efficient reading system pagination.",
      },
    ],
  },
  {
    title: "in Health",
    projects: [
      {
        source: "/assets/poster/HelloLady.png",
        title: "HelloLady",
        purpose: "Women's healthcare application",
        desc: "Conducted a research on women's preiod & ovulation; created an algorithm for the tracking; developed additional healthcare application",
      },
      {
        source: "/assets/poster/WeCare.png",
        title: "WeCare",
        purpose: "Make blood donation easier",
        desc: "Implemented a donation process with a timer, authentication, database, and multiple screens - FAQ, Calendar, Home",
      },
    ],
  },
  {
    title: "for the Public",
    projects: [
      {
        source: "/assets/poster/RideShare.png",
        title: "RideShare",
        purpose: "Application to reduce transportation cost",
        desc: "Made for the +12k employees of 'MCS Group', A Mongolia's Largest Group Company. Designed & developed the initial version. Uses Realtime location tracking with socket. Made with ReactNative and Firebase.",
      },
      {
        source: "/assets/poster/DevSummit.png",
        title: "DevSummit",
        purpose:
          "Bridge between local developer and developers around the world",
        desc: "Connected 2k+ Developers in Mongolia with Seniors from top companies worldwide; Helped the diversity of our community through knowledge sharing. Application made with NextJS",
      },
    ],
  },
];
