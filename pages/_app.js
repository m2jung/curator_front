import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {

//  // graphql 셋팅 
//  const client = new ApolloClient({
//   uri:"http://practice.codebootcamp.co.kr/graphql",
//   cache: new InMemoryCache() 
// })

  return (
    <div>
      <div>==== _app.js 컴포넌트 Header ==== </div>
          <Component {...pageProps} />
        <div>==== _app.js 컴포넌트 Footer ==== </div>
    </div>
)
}
