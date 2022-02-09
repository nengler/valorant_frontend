import "styles/globals.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

/**
 * WDYR (why-did-you-render) helps locate unnecessary re-renders and fix them
 * Applied in development environment, on the frontend only
 *
 * @see https://github.com/welldone-software/why-did-you-render
 */
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  // eslint-disable-next-line no-console
  console.debug(
    "Applying whyDidYouRender, to help you locate unnecessary re-renders during development. See https://github.com/welldone-software/why-did-you-render"
  );
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOwnerReasons: true,
    collapseGroups: true,
  });
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
