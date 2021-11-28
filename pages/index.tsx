import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Map2D, TopBar } from "components";

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

const HomePage: NextPage = () => {
  return (
    <>
      <TopBar user={{}} />
      <div className={styles.container}>
        <Head>
          <title>Corona Travel App - map</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main className={styles.main}>🦠 Here will be our future web app</main>
      </div>
    </>
  );
};

export default HomePage;
