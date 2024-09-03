import Link from "next/link";

export const SecurityBreachesQatar = () => {
  return (
    <div data-scroll-section>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2 className="text-xl font-medium lg:flex lg:flex-row items-center gap-2">
          - Two major computer security incidents that have happened in Qatar
        </h2>
        <div className="text-quaternary opacity-50">2024/09/03</div>
      </div>
      <div className="pl-8 pt-4 font-normal flex flex-col gap-2">
        <h3 className="font-semibold">
          1. Qatar National Bank Data Breach in 2016
        </h3>
        <p className="opacity-70">
          The Turkish far-right group known as Bozkurt Hackers, according to
          Kaspersky Lab, has hacked Qatar National Bank’s database server on
          April 25, 2016. Resulting 1.4GB of customer database being leaked
          online (Jennifer, 2016).
        </p>
        <p className="opacity-70">
          According to Security researcher Omar Benbouazza the bank was running
          known vulnerable software such as Servlet 2.4, JSP and Tomcat 4.2.3.
          And he said that the attacker used one of the most common attacks, a
          SQL injection to the backend ORACLE database server, using the SQLMap
          tool. Thus showing that QNB had a very vulnerable backend and
          protection to it (Kewin, 2016).
        </p>
        <h3 className="font-semibold">
          2. Coronavirus Contact Tracing App Data Breach
        </h3>
        <p className="opacity-70">
          Coronavirus Tracing app that pushed all the people living in Qatar had
          a major security flaw as it was found by Amnesty International.
        </p>
        <p className="opacity-70">
          Even though we don’t know if people were impacted by such a flaw as it
          was luckily found by Amnesty International, it would count as a one of
          the major incidents.
        </p>
        <p className="opacity-70">
          Having more than a million users downloading an app and filling out
          their information such as their name, qatar Id and other sensitive
          information, it also had a real time location tracking - meaning if
          anyone else had the access they could see the location of everyone
          with their personal information (AFP, 2020).
        </p>
        <p className="font-semibold pt-4">References:</p>
        <ul className=" leading-8">
          <li>
            Jennifer, A. (2016, April 28). Hackers target Qatar National Bank
          </li>
          <li>
            <a
              className="underline"
              href="https://www.meed.com/hackers-target-qatar-national-bank/"
            >
              https://www.meed.com/hackers-target-qatar-national-bank/
            </a>
          </li>
          <li>
            Kewin, T. (2016, May 4). Qatar National Bank Hackers Threaten Data
            Leak From Second Bank
          </li>
          <li>
            <Link
              className="underline"
              href="https://www.securityweek.com/qatar-national-bank-hackers-could-leak-data-second-bank/"
            >
              https://www.securityweek.com/qatar-national-bank-hackers-could-leak-data-second-bank/
            </Link>
          </li>
          <li>
            AFP (2020, May 7). Qatar Tracing App Flaw Exposed 1 Mn Users&apos;
            Data: Amnesty
          </li>
          <li>
            <Link
              className="underline"
              href="https://www.securityweek.com/qatar-tracing-app-flaw-exposed-1-mn-users-data-amnesty/"
            >
              https://www.securityweek.com/qatar-tracing-app-flaw-exposed-1-mn-users-data-amnesty/
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
