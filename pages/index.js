import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>! Or4ng.m4n !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Or4nG.M4n" />
        <p className="description">
          Test <code>Subdomain Take over</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
