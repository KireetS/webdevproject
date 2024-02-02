import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { cn } from "@/lib/utils";
import { Lexend } from "next/font/google";

const lexendFont = Lexend({ subsets: ["latin"], weight: "variable", style:"normal"});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={lexendFont.className}>
            <Component {...pageProps} />
        </main>
    );
}
