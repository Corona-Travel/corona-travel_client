import Link from "next/link";

interface DisplayQuizzesProps {
  quizzes: Quizzes;
}

const DisplayQuizzes = ({ quizzes = [] }: DisplayQuizzesProps) => {
  return (
    <div className="flex flex-col justify-center mx-3">
      <div className="py-3 text-lg">Available quizzes:</div>
      <ul className="rounded-lg border border-gray-200 text-gray-900">
        {quizzes.map((quiz, index) => (
          <Link href={`/quiz/${quiz.quiz_id}`} key={index} passHref>
            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg hover:bg-blue-600 hover:rounded-lg">
              {quiz.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DisplayQuizzes;
