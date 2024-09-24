import Link from "next/link";

export const TheoryOfComputation = () => {
  return (
    <div data-scroll-section>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2 className="text-xl font-medium lg:flex lg:flex-row items-center gap-2">
          - Theory of computation
        </h2>
        <div className="text-quaternary opacity-50">2024/09/24</div>
      </div>
      <div className="pl-8 pt-4 font-normal flex flex-col gap-2">
        <p>
          In theoretical computer science and mathematics, the theory of
          computation is the branch that deals with what problems can be solved
          on a model of computation, using an algorithm, how efficiently they
          can be solved or to what degree (e.g., approximate solutions versus
          precise ones) (Decision Problem, n.d.).
        </p>
        <h3 className="font-semibold">1. What is a deicison problem?</h3>
        <p className="opacity-70">
          Decision problem is a computational problem that can be posed as
          a yes–no question of the input values. (Decision Problem, n.d.)
        </p>
        <h3 className="font-semibold">
          2. What does it mean for a decision problem to be decidable?
        </h3>
        <p className="opacity-70">
          A decision problem which can be solved by an algorithm is
          called decidable. Meaning if it could result in Yes/No or True/False
          it is decidable (Decision Problem, n.d.).
        </p>
        <h3 className="font-semibold">
          3. What is the class P? What is the class NP?
        </h3>
        <p className="opacity-70">
          NP is the set of decision problems for which the problem instances,
          where the answer is &quot;yes&quot;, have proofs verifiable
          in polynomial time by a deterministic Turing machine, or alternatively
          the set of problems that can be solved in polynomial time by
          a nondeterministic Turing machine. (NP complexity, n.d.)
        </p>
        <p className="opacity-70">
          Decision problem P is said to be complete for a set of decision
          problems S if P is a member of S and every problem in S can be reduced
          to P. Complete decision problems are used in computational complexity
          theory to characterize complexity classes of decision problems.
          (Decision Problem, n.d.)
        </p>
        <h3 className="font-semibold">
          4. What is the intuitive meaning of the “P versus NP” question?
        </h3>
        <p className="opacity-70">
          The P versus NP problem is a major unsolved problem in theoretical
          computer science. Informally, it asks whether every problem whose
          solution can be quickly verified can also be quickly solved.
        </p>
        <p className="opacity-70">
          An answer to the P versus NP question would determine whether problems
          that can be verified in polynomial time can also be solved in
          polynomial time. If P ≠ NP, which is widely believed, it would mean
          that there are problems in NP that are harder to compute than to
          verify: they could not be solved in polynomial time, but the answer
          could be verified in polynomial time. (P versus NP Problem, n.d.)
        </p>
        <h3 className="font-semibold">
          5. If you resolve the P versus NP question, how much richer will you
          be?
        </h3>
        <p className="opacity-70">
          It is one of the seven Millennium Prize Problems selected by the Clay
          Mathematics Institute, each of which carries a US$1,000,000 prize for
          the first correct solution. (P versus NP Problem, n.d.)
        </p>
        <p className="font-semibold pt-4">References:</p>
        <ul className="leading-8 break-words">
          <li>Wikipedia. Decision Problem. (n.d.).</li>
          <li>
            <a
              className="underline"
              href="https://en.wikipedia.org/wiki/Decision_problem#:~:text=In%20computability%20theory%20and%20computational,question%20of%20the%20input%20values"
            >
              https://en.wikipedia.org/wiki/Decision_problem#:~:text=In%20computability%20theory%20and%20computational,question%20of%20the%20input%20values
            </a>
          </li>
          <li>Wikipedia. NP (complexity). (n.d.).</li>
          <li>
            <a
              className="underline"
              href="https://en.wikipedia.org/wiki/NP_(complexity)"
            >
              https://en.wikipedia.org/wiki/NP_(complexity)
            </a>
          </li>
          <li>Wikipedia. P versus NP problem. (n.d.).</li>
          <li>
            <a
              className="underline"
              href="https://en.wikipedia.org/wiki/P_versus_NP_problem"
            >
              https://en.wikipedia.org/wiki/P_versus_NP_problem
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
