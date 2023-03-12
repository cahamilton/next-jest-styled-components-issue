import type { AppProps } from "next/app";
import { ThemeWrapper } from "../components/ThemeWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
