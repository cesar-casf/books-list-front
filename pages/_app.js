import GlobalStyle from '../styles/global';
import { Container, Content } from '../styles/styles';
function MyApp({ Component, pageProps }) {

  return <div>
        <Component {...pageProps}/>
       <GlobalStyle />
      </div>;
}

export default MyApp