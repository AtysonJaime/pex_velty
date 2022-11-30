import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../assets/scss/styles.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default function App(props) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <MyApp {...props} />
    </ChakraProvider>
  );
}
