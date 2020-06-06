import '@/css/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_RossiLuca_" />
        <meta name="twitter:title" content="Tailwind CSS Color Picker" />
        <meta name="twitter:description" content="A Tailwind CSS Color Picker" />
        <meta name="twitter:creator" content="@_RossiLuca_" />
        <meta property="og:url" content="https://tailwind-colors.now.sh/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tailwind CSS Color Picker" />
        <meta property="og:description" content="A Tailwind CSS Color Picker" />
        <title>Tailwind CSS Color Picker</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}