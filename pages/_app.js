/* eslint-disable react/prop-types */
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  white: "#F4F4F4",
  orange: "#FF7314",
  lightblack: "#393534",
  black: "#22211F",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
