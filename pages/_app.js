import "../styles/globals.css";
import Head from "next/head";
import Layout from "../CrashComponents/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Layoutt from "../TravelApp/Layoutt";
import NProgress from "nprogress";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return (
    <>
      <Head>
        <link rel="shorcut icon" href="/img/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/img/favicon.ico" />

        <meta name="description" content="RD-Makeover" />
        {/* <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <title>Rental</title>
      </Head>
      {/* <Layout> */}
      <ChakraProvider>
        <Layoutt>
          <Component {...pageProps} />
        </Layoutt>
      </ChakraProvider>
      {/* </Layout> */}
    </>
  );
}

export default MyApp;
