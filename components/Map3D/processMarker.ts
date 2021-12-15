import axios from "axios";
import parse from "html-react-parser";

async function processMarkers({ type, id }: { type: string; id: string }): Promise<string> {
  console.log(type, id);

  let to_resolve: any;

  switch (type) {
    case "fact":
      to_resolve = await axios
        .get(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
          }facts/facts/${id}`,
        )
        .then((res) => res.data.description)
        .catch((e) => console.log(e))
        .then(m => {
          const el = parse(m)
          return el
        })

      break;
    case "media":
      to_resolve = await axios
        .get(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
          }media/media/${id}`,
        )
        .then((res) => res.data.description)
        .catch((e) => console.log(e))
        .then(m => {
          const el = parse(m)
          return el
        })
      break;
    case "quiz":
      to_resolve = await axios
        .get(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
          }quizzes/quizzes/${id}`,
        )
        .then((res) => res.data.description)
        .catch((e) => console.log(e))
        .then(m => {
          const el = parse(m)
          return el
        })
      break;
    default:
      break;
  }

  return to_resolve;
}

export default processMarkers;
