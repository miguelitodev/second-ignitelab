import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api-sa-east-1.graphcms.com/v2/cl4o63fjp0qi401xxeslsdb9s/master",
	cache: new InMemoryCache(),
});
