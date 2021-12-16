import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import type { NextPageWithTitle } from "../../_app";
import { useAlert } from "react-alert";
import axios from "axios";

interface SubmitionResult {
  correct_answers: string[];
  percentage: string;
  score: string;
}

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

const QuizPage: NextPageWithTitle = () => {
  const [formData, setFormData] = React.useState<{ [key: string]: string }>({});
  const [submitionResult, setSubmitionResult] = React.useState<SubmitionResult | null>(null);

  const alert = useAlert();
  // @ts-ignore
  alert.removeAll();

  const router = useRouter();
  const { quiz_id } = router.query;

  const { data: quiz, error } = useSWR<Quiz>(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
    }quiz_manager/quiz_manager/${quiz_id}`,
    fetcher,
  );

  const handleSubmit = (event: React.FormEvent) => {
    if (Object.keys(formData).length < quiz!.questions.length) {
      alert.error("Please answer all questions");
    } else {
      let answers: string[] = [];
      quiz!.questions.forEach((el) => {
        answers.push(formData[el.question]);
      });

      // @ts-ignore
      alert.removeAll();


      console.log(formData);
      console.log({
        quiz_id: quiz_id,
        answers,
      });

      axios
        .post(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
          }quiz_manager/quiz_manager/${quiz_id}`,
          {
            quiz_id: quiz_id,
            answers,
          },
        )
        .then((res) => {
          console.log(res.data);
          // alert.show(
          //   <div>
          //     <p>Your score: {res.data.score}</p>
          //     <p>Percentage correct: {res.data.percentage}</p>
          //     <span>Detailed explanation:</span>
          //     {res.data.explanation.map((explanation: any) => {
          //       if (explanation.correct_answer !== explanation.users_answer) {
          //         return (
          //           <p className="pt-2">
          //             You answered: {explanation.correct_answer}, but the correct
          //             answer is {explanation.users_answer}
          //           </p>
          //         );
          //       }
          //     })}
          //   </div>,
          // );
          let correct_answers: string[] = []
          res.data.explanation.map((explanation: any) => {
            correct_answers.push(explanation.correct_answer)
          })

          setSubmitionResult({
            score: `${res.data.score} / ${quiz!.questions.length}`,
            percentage: res.data.percentage,
            correct_answers,
          })
        });

    }


    event.preventDefault();
  };

  const handleChange = (event: any) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    let new_formData = formData;
    new_formData[name] = value;
    setFormData(new_formData);
    console.log(formData);
  };

  if (!quiz_id) return <div>Processing path</div>;
  if (error) return <div>failed to load</div>;
  if (!quiz) return <div>loading...</div>;
  return (
    <div className="max-w-7xl mx-auto px-2 pt-5">
      <p className="text-xl font-bold">{quiz.name}</p>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, question_index) => (
          <div className="pt-3" key={question_index}>
            <fieldset className="border-solid border-gray-300 border-2">
              <legend
              className="font-bold ml-6 px-1 border-2 border-solid border-gray-400"
              >
                {question.question}
              </legend>

              {question.answers.map((answer, answer_index) => (
                <div key={answer_index} className="pl-1 mt-1">
                  <input
                    id={`${answer.option}-${question_index}`}
                    name={question.question}
                    type="radio"
                    value={answer.option}
                    onChange={handleChange}
                    disabled={submitionResult !== null}
                  />
                  <label htmlFor={`${answer.option}-${question_index}`}
                    className={`ml-1 rounded-sm px-1 ${submitionResult !== null && formData[question.question] === answer.option && (answer.option === submitionResult.correct_answers[question_index] ? "bg-green-500" : "bg-red-400")}`}
                  >
                    {answer.option}
                  </label>
                </div>
              ))}
              {submitionResult && submitionResult.correct_answers[question_index] !== formData[question.question] && <div className="ml-2 my-1">
                Correct answer: {submitionResult.correct_answers[question_index]}
                </div>}
            </fieldset>
          </div>
        ))}
        <div className="flex flex-row items-center">
        <div>
        <input
          // disabled={formLength !== quiz.questions.length}
          className="mt-3 p-2 rounded bg-gray-900 hover:bg-gray-700 text-white disabled:bg-gray-500 disabled:text-gray-200"
          type="submit"
          value="Submit"
          disabled={submitionResult !== null}
        />
        </div>
        <div className="grow mx-auto">
        </div>
        <div>
        {submitionResult && <div className="text-4xl text-right"><p>Result: {submitionResult.percentage}%, {submitionResult.score} points</p></div>}
        </div>
        </div>

      </form>

    </div>
  );
};

QuizPage.title = "Corona Travel / Quiz";

export default QuizPage;
