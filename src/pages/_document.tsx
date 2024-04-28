import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.webp"
          type="image/<generated>"
          sizes="<generated>"
        />
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* <link
            rel="apple-touch-icon"
            href="/apple-icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
