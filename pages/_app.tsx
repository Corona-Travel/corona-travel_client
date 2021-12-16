import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { getLayout } from "components";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

type NextPageWithTitle = NextPage & {
  title?: string;
};

type AppPropsWithTitle = AppProps & {
  Component: NextPageWithTitle;
};

function MyApp({ Component, pageProps }: AppPropsWithTitle) {
  const title = Component.title ?? "Corona Travel";

  return (
    <AlertProvider template={AlertTemplate} position={positions.MIDDLE}>
      {getLayout(<Component {...pageProps} />, title)}
    </AlertProvider>
  );
}

export default MyApp;
export type { NextPageWithTitle };
