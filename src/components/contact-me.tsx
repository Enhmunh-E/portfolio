import { Title } from "./title";
import Image from "next/image";
export const ContactMe = () => {
  const contacts = [
    {
      icon: "assets/contact/facebook.svg",
      link: "https://www.facebook.com/enhuush.enhmunh",
    },
    {
      icon: "assets/contact/instagram.svg",
      link: "https://www.instagram.com/emu_ee/",
    },
    {
      icon: "assets/contact/github.svg",
      link: "https://github.com/Enhmunh-E",
    },
    {
      icon: "assets/contact/linkedin.svg",
      link: "https://www.linkedin.com/in/enkhmunkh-enkhbayar-32312022b",
    },
  ];
  return (
    <div
      data-scroll-section
      className="container-left-gap flex flex-col container-right-gap pb-9 relative"
    >
      <div className="px-4  pb-8 flex flex-col justify-center items-center">
        <Title>Contact Me</Title>
        <div className="flex flex-row gap-4 justify-center pt-9">
          {contacts.map(({ icon, link }) => (
            <a
              className="w-12 h-12 flex items-center justify-center rounded-full"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              href={link}
              key={link}
            >
              <Image src={icon} width={32} height={32} alt={link} />
            </a>
          ))}
        </div>
        <div className="text-secondary font-oswald text-base text-center py-4">
          or
        </div>
        <a
          className=" py-3 px-4 w-44 font-raleway text-center font-normal text-base border border-white text-secondary lg:text-base hover:bg-white hover:text-black"
          style={{
            filter: "drop-shadow(-4px 4px 0px rgba(255, 255, 255, 0.25))",
          }}
          href="mailto:enkhmunkh.enkhbyr@gmail.com"
        >
          Email
        </a>
      </div>
    </div>
  );
};
