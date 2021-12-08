import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
// import styles from "../styles/Map.module.css";
import useSWR from "swr";

import { Map3D, TopBar } from "components";

// replace with data fetching

const Map3DPage: NextPage = () => {
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

  const router = useRouter()
  const { lat="0", lng="0" } = router.query

  return (
    <>
      <Head>
        <title>Corona Travel App - Panorama</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <TopBar user={{}} />

      <Map3D
        apiKey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
        start_lat={parseFloat(lat as string)}
        start_lng={parseFloat(lng as string)}
      />
    </>
  );
};

export default Map3DPage;
