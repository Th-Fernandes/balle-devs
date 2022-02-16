import Head from "next/head";
import { GlobalStyle } from "../src/components/GlobalStyle";
import logo from "../src/img/Logo-ballerini-devs.svg";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Ballerini Devs</title>
          {/* icone */}
          <link rel="icon" href={logo.src} />
          {/* fontes */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
          <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&family=Overpass:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}