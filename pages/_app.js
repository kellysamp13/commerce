import "../styles/globals.css"
import Head from "next/head";
import Link from "next/link"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Commerce app</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="app">
      <nav className="nav">
        <Link href="/">Home</Link>
      </nav>

      <Component {...pageProps} />
    </main>
  </>
)

export default MyApp
