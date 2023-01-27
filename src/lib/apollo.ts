import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cld0xtdl30lnt01ug717sanvl/master",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
