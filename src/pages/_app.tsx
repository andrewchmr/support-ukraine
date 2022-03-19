import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import Script from "next/script";
import React from "react";

import { SEOTags } from "lib/components/SEOTags";
import customTheme from "lib/styles/customTheme";
import "lib/styles/globals.css";
import { GA_TRACKING_ID, pageview } from "utils/gtag";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const handleGoogleAnalytics = () => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  };

  React.useEffect(() => {
    handleGoogleAnalytics();
  }, []);

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="googleTagManager"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Box display="flex" flexDirection="column" height="100vh" margin="0">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
