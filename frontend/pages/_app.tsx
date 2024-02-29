import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globals } from "@/styles/globals";
import Sidebar from "@/components/sidebar";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <PrimeReactProvider>
        <Global styles={globals} />
        {/* <Sidebar /> */}
        <Component {...pageProps} />
      </PrimeReactProvider>
    </ApolloProvider>
  );
}
