import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oj8nbm086d01xx2dc970gt/master',
  cache: new InMemoryCache()
})