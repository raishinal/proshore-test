import { getToken } from "./Utility";
import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
const httpLink = new createUploadLink({
  uri: "https://www.dnd5eapi.co/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
    console.log("graphQLErrors", graphQLErrors);
    if (graphQLErrors[0].message === "Unauthenticated.") {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
  }

  if (networkError) {
    // do something with network error
    console.log("networkError", networkError);
  }
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const link = ApolloLink.from([authLink, errorLink, httpLink]);
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
