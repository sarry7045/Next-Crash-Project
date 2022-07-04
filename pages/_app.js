import "../styles/globals.css";
import Head from "next/head";
import Layout from "../CrashComponents/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shorcut icon" href="/img/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta name="description" content="RD-Makeover" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <title>NextJs-Crash-Project</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
