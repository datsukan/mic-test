import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' })

const title = 'Mic Test'
const description = 'マイクの音量や品質をテストできるサイトです。'
const baseUrl = 'https://mic-test.utility.datsukan.me'

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/ogp.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@datsukan_tech',
    images: [`${baseUrl}/ogp.png`], // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${clsx(notoSansJP.variable, 'font-sans')} bg-slate-50`}>{children}</body>
    </html>
  )
}
