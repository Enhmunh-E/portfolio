import Link from "next/link";

export const ArtificialIntelligence = () => {
  return (
    <div data-scroll-section>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2 className="text-xl font-medium lg:flex lg:flex-row items-center gap-2">
          - Artificial Intelligence
        </h2>
        <div className="text-quaternary opacity-50">2024/10/8</div>
      </div>
      <div className="pl-8 pt-4 font-normal flex flex-col gap-2">
        <h3 className="font-semibold">
          1. How would you define Artificial Intelligence (AI)?
        </h3>
        <p className="opacity-70">
          Artificial intelligence is a field of science where we buiild computer
          that can reason and learn. It encompasses many different disciplines,
          including computer science, data analytics and statistics, hardware
          and software engineering. AI is based on machine and deep learning,
          etc. (Google)
        </p>
        <h3 className="font-semibold">
          2. AI has existed for nearly 70 years. Why is it experiencing an
          impressive growth right now?
        </h3>
        <p className="opacity-70">
          AI is more popular because it is now more publicly available due to
          the proliferation of the cloud, the capability to store more data
          effectively and increasing computing powers.
        </p>
        <h3 className="font-semibold">
          3. Can you identify three domains or classes of problems where current
          AI models still face significant challenges?
        </h3>
        <p className="opacity-70">
          Common sense and reasoning:
          <br />
          One of the biggest hurdle of AI we are facing to day would be making
          AI have more reasoning instead of computing the next word it will use.
        </p>
        <p className="opacity-70">
          Data leak:
          <br />
          Because AI is trained upon data that is available on the internet,
          there are possibilities of data leak. And this has happened to Samsung
          where their proprietary source was leaked due to their developer using
          it to fix the code.
        </p>
        <p className="opacity-70">
          Environment:
          <br />
          Training AI models require immense computing which in turn creates so
          much carbon emission.
        </p>
        <h3 className="font-semibold">
          4. Can you name at least three application sectors where robots are
          widely used, and explain why they are employed in those sectors?
        </h3>
        <p className="opacity-70">
          Robots are used mainly in production of things where every move is
          repetitive. Thus it is primarily used in three sectors: manufacturing
          (Automobile manufacturing), warehouse (package sorting) and
          agriculture (watering).
        </p>
        <h3 className="font-semibold">
          5. Do you believe that the convergence of Artificial General
          Intelligence (AGI) and fully autonomous robotics is imminent and could
          potentially have a major impact on the world?
        </h3>
        <p className="opacity-70">
          I believe that while AGI and autonomous robots could potentially
          impact the world, one of it’s major drawbacks would be ethical
          considerations regarding conscience and rights of the robots. But
          advantages of having AGI would outweight the disadvantages as it helps
          us be more productive
        </p>
        <p className="font-semibold pt-4">References:</p>
        <ul className=" leading-8">
          <li>Google, Artificial Intelligence</li>
          <li>
            <Link
              className="underline"
              href="https://cloud.google.com/learn/what-is-artificial-intelligence"
            >
              https://cloud.google.com/learn/what-is-artificial-intelligence
            </Link>
          </li>
        </ul>
        <p className="font-semibold pt-4">Read More:</p>
        <ul className=" leading-8">
          <li>
            <Link
              className="underline"
              href="https://www.forbes.com/councils/forbestechcouncil/2023/12/01/why-ai-is-popular-now-and-two-ways-to-use-it-better/"
            >
              https://www.forbes.com/councils/forbestechcouncil/2023/12/01/why-ai-is-popular-now-and-two-ways-to-use-it-better/
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              href="https://www.simplilearn.com/challenges-of-artificial-intelligence-article"
            >
              https://www.simplilearn.com/challenges-of-artificial-intelligence-article
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              href="https://cloud.google.com/learn/what-is-artificial-intelligence"
            >
              https://cloud.google.com/learn/what-is-artificial-intelligence
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
