import React from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Head from 'next/head'

import 'tailwindcss/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <React.StrictMode>
      <Head>
        <title>Chanwit Settavongsin · Curriculum Vitae</title>
        <link rel='shortcut icon' href='/static/favicon.png' />
        <link rel='apple-touch-icon-precomposed' href='/static/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  )
}

export default NextApp
