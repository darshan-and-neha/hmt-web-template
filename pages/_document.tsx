import { ServerStyles, createStylesServer } from '@mantine/ssr'
import Document, {
  DocumentContext,
  Html,
  Main,
  Head,
  NextScript,
} from 'next/document'
import React from 'react'
import { rtlCache } from 'rtl-cache'

const stylesServer = createStylesServer(rtlCache)

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
