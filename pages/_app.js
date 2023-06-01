import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";


//최종적으로 Component들이 모여서 보여지는 곳 
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Global styles={globalStyles}/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </div>
)
}
