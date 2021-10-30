import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Map2D from "components/Map2D";

// replace with data fetching
const markers: Markers = [
  {
    name: "Moscow",
    pos: {
      lat: 55.751244,
      lng: 37.618423,
    },
    place_id: "0",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corona Travel App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>🦠 Here will be our future web app</main>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map2D
          APIkey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
          zoom={1}
          markers={markers}
        />
      </div>
    </div>
  );
};

export default Home;
