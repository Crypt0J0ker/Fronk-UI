import React from "react";
import Head from "next/head";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import MainPage from "@/components/MainPage/MainPage";


const IndexPage = () => {
  return (
    <>
      <React.StrictMode>
        <BaseLayout>
          <Head>
            <title>Fronk World</title>
            <meta
              property="og:title"
              content="Fronk World"
              key="title"
            />
          </Head>
          <MainPage />
        </BaseLayout>
      </React.StrictMode>
    </>
  );
};

export default IndexPage;

