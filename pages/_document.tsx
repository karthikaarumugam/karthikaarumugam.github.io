import { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Karthika Arumugam",
    description: "Portfolio of Karthika Arumugam, Tech Lead",
};

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Portfolio of Karthika Arumugam, Tech Lead" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}