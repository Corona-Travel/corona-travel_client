import Link from "next/link"
import Img from "next/image"
import axios from "axios";
import parse from "html-react-parser";

async function processMarkers({
  type,
  id,
}: {
  type: string;
  id: string;
}): Promise<string> {
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
        .then((m) => {
          const el = parse(m);
          return el;
        });

      break;
    case "media":
      to_resolve = await axios
        .get(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
          }media/media/${id}`,
        )
        .then((res) => {
          const data = res.data;
          console.log(data)
          return (
            <div>
              <p>{data.type} of {data.name}</p>
              {/* {data.type === "audio" ? <></> : <p><Link href={data.url} passHref><a target="_blank" rel="noreferrer">Click here to view in a new tab</a></Link></p>} */}
              {data.type === "photo" &&  <Img src={data.url} alt={`photo of ${data.name}`}></Img>}
              {data.type === "video" &&  <video width="320" height="240" controls><source src={data.url} type="video/mp4" /></video>}
              {data.type === "audio" &&  <audio controls><source src={data.url} type="audio/mpeg" /></audio>}
            </div>
          );
        })
        .catch((e) => console.log(e));
      break;
    case "quiz":
      to_resolve = await axios
        .get(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
          }quizzes/quizzes/${id}`,
        )
        .then((res) => {
          const data = res.data;
          console.log(data)
          return (
            <div>
              <p>Quiz &quot;{data.name}&quot;</p>
              <Link href={`/quiz/${data.quiz_id}`}>Click here to take a quiz</Link>
            </div>
          )
        })
        .catch((e) => console.log(e))
      break;
    default:
      break;
  }

  return to_resolve;
}

export default processMarkers;
