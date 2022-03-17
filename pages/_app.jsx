/**
 * @file pages/_app.jsx
 */

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenge | QR Code Component</title>
        <link rel="shortcut icon" href="/images/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
