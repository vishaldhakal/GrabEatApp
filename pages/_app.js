import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { AppWrapper } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
export default MyApp;
