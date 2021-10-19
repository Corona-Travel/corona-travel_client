import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corona Travel App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        🦠 CHere will be our future web app
      </main>
    </div>
  );
};

export default Home;
