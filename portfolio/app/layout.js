import Head from 'next/head';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanya Hinduja',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
