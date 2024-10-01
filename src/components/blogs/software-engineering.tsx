import Link from "next/link";

export const SoftwareEngineering = () => {
  return (
    <div data-scroll-section>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2 className="text-xl font-medium lg:flex lg:flex-row items-center gap-2">
          - Software Engineering
        </h2>
        <div className="text-quaternary opacity-50">2024/10/1</div>
      </div>
      <div className="pl-8 pt-4 font-normal flex flex-col gap-2">
        <h3 className="font-semibold">
          1. What was the &quot;software crisis&quot; of the 1960s, and how did
          it lead to the creation of software engineering? What problems did
          this new discipline aim to solve?
        </h3>
        <p className="opacity-70">
          Software crisis is a term used in the early days of computing science
          for the difficulty of writing useful and efficient computer programs
          in the required time. The software crisis was due to the rapid
          increases in computer power and the complexity of the problems that
          could be tackled. With the increase in the complexity of the software,
          many software problems arose because existing methods were inadequate.
          (Wikipedia)
        </p>
        <p className="opacity-70">
          In the wake of the Software crisis, Software Engineering emerged as a
          new engineering discipline concerned with all aspects of software
          production that encompassed the theories, concepts, principles,
          techniques, standards, and tools that could be used for developing
          high-quality and reliable professional software.
        </p>
        <h3 className="font-semibold">
          2. What are Agile methods and the Waterfall model in software
          development, and how are they different?
        </h3>
        <p className="opacity-70">
          Agile methodology is a project management framework that breaks
          projects down into several dynamic phases, commonly known as sprints.
          The Agile framework is an iterative methodology. After every sprint,
          teams reflect and look back to see if there was anything that could be
          improved so they can adjust their strategy for the next sprint
          (Laoyan, S. 2024).
        </p>
        <p className="opacity-70">
          Waterfall project management is a sequential project management
          methodology that&apos;s divided into distinct phases. Each phase
          begins only after the previous phase is completed. This article
          explains the stages of the waterfall methodology and how it can help
          your team achieve their goals (Laoyan, S. 2024).
        </p>
        <p className="opacity-70">
          Difference:
          <br />
          Agile: continuous improvement based on changing customer needs
          <br />
          Waterfall: linear development with no changing requirement
        </p>
        <h3 className="font-semibold">
          3. Why does Netflix intentionally shut down its servers randomly, and
          how does this help their software?
        </h3>
        <p className="opacity-70">
          Netflix’s tool called Chaos Monkey, goes around Netflix’s system and
          distrupts it. By doing it in a controlled environment, it help s their
          software to be more robust because it avoids disasters that could
          happen.
        </p>
        <h3 className="font-semibold">
          4. What is open-source software, and why do big companies like Google,
          Microsoft, and Amazon contribute to it?
        </h3>
        <p className="opacity-70">
          Open-source software is a software with a source code that everyone
          can inspect it.
        </p>
        <p className="opacity-70">
          Big companies contribute to open source because it lowers their cost
          as open source software is built upon community.
        </p>
        <h3 className="font-semibold">
          5. Why can maintaining software sometimes be more costly than building
          it initially, and how does technical debt contribute to these higher
          maintenance costs?
        </h3>
        <p className="opacity-70">
          One of the main reasons on why maintaining software becomes more
          costly than building is that the more people use the software the fee
          gets greater due to many services becoming pay per use.
        </p>
        <p className="opacity-70">
          Also, it becomes more expensive due to code becoming more and more
          complex as the time goes, due to continuous development.
        </p>
        <p className="font-semibold pt-4">References:</p>
        <ul className=" leading-8">
          <li>The 1960s Software Crisis</li>
          <li>
            <Link
              className="underline"
              href="https://piusmwilson.medium.com/the-1960s-software-crisis-27d15f6356ef"
            >
              https://piusmwilson.medium.com/the-1960s-software-crisis-27d15f6356ef
            </Link>
          </li>
          <li>Laoyan, S. 2024, Agile Methodology</li>
          <li>
            <Link
              className="underline"
              href="https://asana.com/resources/agile-methodology"
            >
              https://asana.com/resources/agile-methodology
            </Link>
          </li>
          <li>
            Laoyan, S. 2024, Guide to waterfall methodology: Free template and
            examples
          </li>
          <li>
            <Link
              className="underline"
              href="https://asana.com/resources/waterfall-project-management-methodology"
            >
              https://asana.com/resources/waterfall-project-management-methodology
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
