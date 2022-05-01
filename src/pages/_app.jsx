import 'src/styles/globals.css'
import Head from 'next/head'
import { AppLayout } from '../layouts/AppLayout'
import { SWRConfig } from 'swr'

export const fetcher = async (...args) => {
  const res = await fetch(...args)
  const json = await res.json()
  return json
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  )
}

export default MyApp
