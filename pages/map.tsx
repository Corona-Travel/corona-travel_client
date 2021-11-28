import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Map.module.css";
import useSWR from "swr";

import { Map, TopBar } from "components";

// replace with data fetching

const MapPage: NextPage = () => {
  const markers2D = useSWR<Markers2D, any>("/api/map/2D", (url: string) =>
    fetch(url).then((res) => res.json()),
  )["data"];
  const markers3D = useSWR<Markers3D, any>("/api/map/3D", (url: string) =>
    fetch(url).then((res) => res.json()),
  )["data"];

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
