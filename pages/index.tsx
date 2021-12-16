import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="md:flex items-center max-w-7xl mx-auto px-2">
      {/* <main className={styles.main}>🦠 Here will be our future web app</main> */}
      <div className="flex-1 m-3 md:text-2xl text-center md:text-left">
        <p className="leading-10 pb-5">
          <em>Hello!</em>
        </p>
        <p className="leading-10 pb-5">
          Thank you for joining coronatravel.app!
        </p>
        <p className="leading-10 pb-5">
          We want to create the safe and affordable environment where everyone
          can explore our beautiful world and spend their time wisely!
        </p>
        <p className="leading-10 pb-5">
          Please press <Link href="/map">“Map”</Link> to choose a location to
          explore :)
        </p>
      </div>
      <div className="flex-1">
        <Image src="/main_page.png" alt="" width={1181} height={1181} />
      </div>
    </div>
  );
};

export default HomePage;
