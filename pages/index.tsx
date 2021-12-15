import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { TopBar } from "components";

const HomePage: NextPage = () => {
  return (
    <>
      <main className={styles.main}>🦠 Here will be our future web app</main>
    </>
  );
};

export default HomePage;
