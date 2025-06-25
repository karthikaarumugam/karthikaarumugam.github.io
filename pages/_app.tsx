import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}