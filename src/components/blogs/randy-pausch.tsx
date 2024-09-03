import Link from "next/link";

export const RandyPausch = () => {
  return (
    <div data-scroll-section>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2 className="text-xl font-medium lg:flex lg:flex-row items-center gap-2">
          {/* <div className="w-2 h-2 bg-white rounded-full" /> */}- Randy
          Pausch Lecture:{" "}
          <Link
            href="https://youtu.be/oTugjssqOT0"
            className="underline inline-block"
          >
            Time Management
          </Link>
        </h2>
        <div className="text-quaternary opacity-50">2024/8/30</div>
      </div>
      <div className="pl-8 pt-4 opacity-70 font-normal flex flex-col gap-2">
        <p>
          Randy Pausch was a Professor of Computer Science at Carnegie Mellon
          University. Known for having had pancreatic cancer he became popular
          through his lectures.
        </p>
        <p>
          Watching his lecture about Time Management, I was inspired by him and
          learned a lot about time management.
        </p>
        <p className="text-primary">
          Five points he said that I liked in his talk:
        </p>
        <ul className="list-disc pl-4">
          <li>
            You don’t find time for important things, you make it. And you make
            it, by electing not to do something else.
          </li>
          <li>
            Find your creative time, and defend it ruthlessly. Spent it alone,
            maybe at home if you have to.
          </li>
          <li>
            Find your dead time and do stuff that you don’t need to be at your
            best.
          </li>
          <li>
            Think about best possible outcome when deciding between effective or
            efficient.
          </li>
          <li>
            Time is all we have, and you may find one day, you have less than
            you think
          </li>
        </ul>
      </div>
    </div>
  );
};
