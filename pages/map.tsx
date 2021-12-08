import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Map.module.css";
import useSWR from "swr";

import { Map2D, TopBar } from "components";

// replace with data fetching

const Map2DPage: NextPage = () => {
  const markers2D: Markers2D = [
    {
      name: "Moscow",
      pos: [55.751244, 37.618423],
      place_id: "0",
    },
    {
      name: "Moscow_точный",
      pos: [55.754093, 37.620407],
      place_id: "1",
    },
    {
      name: "Moscow_ссылка_1",
      pos: [55.7545977, 37.6188742],
      place_id: "2",
    },
    {
      name: "Moscow_ссылка_2",
      pos: [55.7539303, 37.620795],
      place_id: "2",
    },
  ]
  // useSWR<Markers2D, any>("/api/map/2D", (url: string) =>
  // fetch(url).then((res) => res.json()),
  // )["data"];

  return (
    <>
      <Head>
        <title>Corona Travel App - Map</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <TopBar user={{}} />

      <Map2D
        apiKey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
        markers2D={markers2D}
      />
    </>
  )
}

export default Map2DPage
