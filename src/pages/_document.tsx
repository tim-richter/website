import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

interface Props {
  isProduction: boolean;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const isProduction = process.env.NODE_ENV === 'production';

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html lang="en">
        <Head>
          {isProduction && (
            <script
              async
              src="https://ackee.timrichter.dev/tracker.js"
              data-ackee-server="https://ackee.timrichter.dev"
              data-ackee-domain-id="0f1a7f3e-4055-4caf-a374-952ca34a03c3"
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
