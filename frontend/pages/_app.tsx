import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globals } from "@/styles/globals";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { ThemeProvider } from "@mui/material";
import AppBar from "@/components/app-bar";
import theme from "@/styles/theme";
import Head from "next/head";
import "@fontsource/inter";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { registerPlugin } from "filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

registerPlugin(FilePondPluginImagePreview);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:1337/graphql"
  })
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Global styles={globals} />
        <AppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
