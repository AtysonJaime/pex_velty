import React from "react";
import Head from "next/head";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>PEX - Velty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StyledPage></StyledPage>
    </>
  );
}
