/* eslint-disable react/jsx-props-no-spreading */
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { SEOTags } from "lib/components/SEOTags";
import customTheme from "lib/styles/customTheme";
import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta property="og:url" content="https://ukraine-army.help" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SEOTags />
      <Box display="flex" flexDirection="column" height="100vh" margin="0">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
