import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Map.module.css";
import useSWR from "swr";
import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import { Map, TopBar } from "components";

// replace with data fetching

const MapPage: NextPage = () => {
  const markers2D: Markers2D = [{
    name: "Moscow",
    pos: [55.751244, 37.618423],
    place_id: "0",
  },];
  // useSWR<Markers2D, any>("/api/map/2D", (url: string) =>
    // fetch(url).then((res) => res.json()),
  // )["data"];
  const markers3D: Markers3D = [{
    name: "Moscow",
    pos: [55.751244, 37.618423],
    marker_id: "0",
    type: "fact",
  },];
  // useSWR<Markers3D, any>("/api/map/3D", (url: string) =>
    // fetch(url).then((res) => res.json()),
  // )["data"];

  return (
    <>
      <TopBar user={{}} />
      <div>
        <Head>
          <title>Corona Travel App</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <div style={{ height: "94vh", width: "100%" }}>
          <Map
            apiKey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
            markers2D={markers2D}
            markers3D={markers3D}
          />
        </div>
      </div>
    </>
  );
};

export default MapPage;
export async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
     // Options
    //  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
     origin: '*',
     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic
  res.json({ message: 'Hello NextJs Cors!' });
}
