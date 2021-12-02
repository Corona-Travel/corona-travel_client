import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { TopBar } from "components";


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
