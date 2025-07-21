import type { Metadata } from 'next'

import React from 'react'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import '../globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import SmoothScroll from '@/components/SmoothScroll'
import { draftMode } from 'next/headers'
import { Banner } from '@/components/Banner'

import { Header } from '@/Header/Component'
import { FooterServer } from '@/Footer/Footer'
import { Toaster } from 'sonner'
import { cormorantGaramond, inter } from '@/fonts/fonts'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={`${cormorantGaramond.variable} ${inter.variable}`}>
        <SmoothScroll>
          <Banner />
          <Header />
          <Toaster />
          {children}
          <FooterServer />
        </SmoothScroll>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
