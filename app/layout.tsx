import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Chaim Gross - Portfolio',
  description: 'Portfolio website for Chaim Gross',
  icons: {
    icon: '/CG_image.PNG',
    shortcut: '/CG_image.PNG',
    apple: '/CG_image.PNG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          strategy="afterInteractive"
          data-pid="1zdHlLBvTIGFT5noO"
          data-version="062024"
        />
      </body>
    </html>
  )
} 