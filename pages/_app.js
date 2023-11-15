import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import '../public/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
        <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  )
}