import { AppWrapper } from "../Context/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;

