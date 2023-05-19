import Menu from "@/components/Menu";
import { Metadata } from "next";
import Head from "next/head";

export default function News() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Kyotech" />
                <meta name="author" content="Arthur Bueno" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Kyotech - Notícias</title>
            </Head>
            <Menu />
            <div className='w-full bg-white min-h-screen p-6'>
                <p>NEWS</p>
            </div>
        </div>
    );
}