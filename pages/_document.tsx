import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'
import * as config from '../lib/config'
export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='ko'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
            <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
            <link
              rel='apple-touch-icon'
              sizes='57x57'
              href='/apple-touch-icon-57x57.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='72x72'
              href='/apple-touch-icon-72x72.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='76x76'
              href='/apple-touch-icon-76x76.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='114x114'
              href='/apple-touch-icon-114x114.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='120x120'
              href='/apple-touch-icon-120x120.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='144x144'
              href='/apple-touch-icon-144x144.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='152x152'
              href='/apple-touch-icon-152x152.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon-180x180.png'
            />

            <link rel='manifest' href='/manifest.json' />

            {config.googleAnalytics && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics}`}
                ></script>
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${config.googleAnalytics}');
              `
                  }}
                ></script>
              </>
            )}
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
