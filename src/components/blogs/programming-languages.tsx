import Link from "next/link";

export const ProgrammingLanguages = () => {
  return (
    <div data-scroll-section>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2 className="text-xl font-medium lg:flex lg:flex-row items-center gap-2">
          - Programming Languages
        </h2>
        <div className="text-quaternary opacity-50">2024/09/10</div>
      </div>
      <div className="pl-8 pt-4 font-normal flex flex-col gap-2">
        <h3 className="font-semibold">
          1. Why did we move from punch cards to programming languages ? What
          does that tell you about the purpose of programming languages?
        </h3>
        <p className="opacity-70">
          At the start when the concept called programming started, our codes
          were saved on punched cards which is one of the earliest storage
          devices preceding floppy disks, magnetic tape and the hard drives.
          (IBM, The IBM Punched Card, para. 2). So why did we create programming
          languages? We created programming languages to communicate
          instructions to a computer. (Wikipedia, History of Programming
          Languages, para. 8).
        </p>
        <h3 className="font-semibold">
          2. There are hundreds of different programming languages out there.
          Why do you think we need so many?
        </h3>
        <p className="opacity-70">
          Javascript, Python, C++, C#, C and others. There are many programming
          languages because they each have different purposes. Some are built to
          solve other programming language’s problems.
        </p>
        <h3 className="font-semibold">
          3. What are some drawbacks of a programming language you use? How
          would you like it to be different? Think of specific examples.
        </h3>
        <p className="opacity-70">
          I mostly use Javascript as my everyday programming language. With its
          latest updates ES15, I believe most of its drawbacks are fixed as I
          don’t have any issues with it.
        </p>
        <h3 className="font-semibold">
          3. If you were going to create a new programming language, how would
          you start? What do you need to define?
        </h3>
        <p className="opacity-70">
          I believe that finding an equality between performance and usability
          would be the best way to create a new programming language. Because, I
          believe that even though the computer programmes are getting more
          usable it gets slower over time. If I were to make a new programming
          language, I won’t sacrifice it’s speed over performance.
        </p>
        <p className="font-semibold pt-4">References:</p>
        <ul className=" leading-8">
          <li>IBM. The IBM Punched Card</li>
          <li>
            <a
              className="underline"
              href="https://www.ibm.com/history/punched-card#:~:text=The%20IBM%20card%20was%20replaced,cards%20needed%20to%20process%20data"
            >
              https://www.ibm.com/history/punched-card#:~:text=The%20IBM%20card%20was%20replaced,cards%20needed%20to%20process%20data
            </a>
          </li>
          <li>Wikipedia, History of Programming Languages</li>
          <li>
            <Link
              className="underline"
              href="https://en.wikipedia.org/wiki/History_of_programming_languages"
            >
              https://en.wikipedia.org/wiki/History_of_programming_languages
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
