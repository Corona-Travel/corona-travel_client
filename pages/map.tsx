import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Map.module.css";
import useSWR from "swr";

import { Map, TopBar } from "components";

// replace with data fetching

const MapPage: NextPage = () => {
  const markers2D: Markers2D = [
    {
      name: "Moscow",
      pos: [55.751244, 37.618423],
      place_id: "0",
    },
  ];
  // useSWR<Markers2D, any>("/api/map/2D", (url: string) =>
  // fetch(url).then((res) => res.json()),
  // )["data"];
  const markers3D: Markers3D = [
    {
      name: "Moscow",
      pos: [55.751244, 37.618423],
      marker_id: "0",
      type: "fact",
    },
  ];
  // useSWR<Markers3D, any>("/api/map/3D", (url: string) =>
  // fetch(url).then((res) => res.json()),
  // )["data"];

  return (
    <>
      <Head>
        <title>Corona Travel App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <TopBar user={{}} />

      <Map
        apiKey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
        markers2D={markers2D}
        markers3D={markers3D}
      />
    </>
  );
};

export default MapPage;
