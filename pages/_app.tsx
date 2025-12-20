import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        let cleanup: void | (() => void);
        import("../components/interaction.js").then((mod) => {
            if (mod && typeof mod.initInteraction === 'function') {
                cleanup = mod.initInteraction();
            }
        }).catch(() => { });
        return () => { if (typeof cleanup === 'function') cleanup(); };
    }, []);
    return (
        <div>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}