import type { PropsWithChildren, ReactElement } from "react";
import Head from "next/head";
import { TopBar } from "components";

interface LayoutProps {
  title: string;
}

const Layout = ({ title, children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <TopBar/>
      {children}
    </>
  );
};

const getLayout = (page: ReactElement, title: string) => (
  <Layout title={title}>{page}</Layout>
);

export default Layout;
export { getLayout };
