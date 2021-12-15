import type { NextPageWithTitle } from "./_app";
import useSWR from "swr";

import { DisplayQuizzes } from "components";

// replace with data fetching

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

const QuizzesPage: NextPageWithTitle = () => {
  const { data: quizzes, error } = useSWR<Quizzes>(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
    }quizzes/quizzes`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!quizzes) return <div>loading...</div>;
  return (
    <div className="max-w-7xl mx-auto px-2">
      <DisplayQuizzes quizzes={quizzes} />
    </div>
  );
};

QuizzesPage.title = "Corona Travel / Quizzes";

export default QuizzesPage;
