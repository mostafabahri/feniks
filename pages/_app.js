// pages/_app.js
import "../style/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
