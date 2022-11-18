import { HttpLink } from '@apollo/client';
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "https://trade.flashxchanger.com/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});