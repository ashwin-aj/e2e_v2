import type { AppProps } from "next/app";
import { AppProvider } from "@/context/AppContext"; // ✅ using tsconfig.json baseUrl (probably set to src)
import "../styles/globals.css"; // keep your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
