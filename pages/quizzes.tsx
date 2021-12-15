import type { NextPageWithTitle } from "./_app";
import useSWR from "swr";

import { Map2D } from "components";

// replace with data fetching

const fetcher = async (url: string) => fetch(url).then((res) => res.json());
// const fetcher = async (url: string) => await Axios.get(url).then((res) => res.data);

const QuizzesPage: NextPageWithTitle = () => {
  const { data: quizzes, error } = useSWR<Markers2D>(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
    }quiz_manager`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!quizzes) return <div>loading...</div>;
  return (
    // <Map2D
    // apiKey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
    // markers2D={markers2D}
    // />
    <div></div>
  );
};

QuizzesPage.title = "Corona Travel / Quizzes";

export default QuizzesPage;
