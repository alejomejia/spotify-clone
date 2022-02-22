import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from 'components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify - Web Player</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout />
    </>
  )
}

export default Home
