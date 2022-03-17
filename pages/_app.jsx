/**
 * @file pages/_app.jsx
 */

import Head from "next/head";
import "../global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenge | QR Code Component</title>
        <link rel="shortcut icon" href="/images/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
      <footer className="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.dgdev1024.com" target="_blank">
            Dennis Griffin
          </a>
          .
        </p>
      </footer>
    </>
  );
}
