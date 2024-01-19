import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider, createEmotionCache } from '@mantine/core'

const myCache = createEmotionCache({ key: 'hmt' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hire My Talent</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div dir="rtl">
        <MantineProvider
          theme={{ dir: 'rtl' }}
          emotionCache={myCache}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </div>
    </>
  )
}
