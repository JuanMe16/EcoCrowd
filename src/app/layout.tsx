import './globals.css';
import './root.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "800"] })

export const metadata: Metadata = {
  title: 'EcoCrowd',
  description: 'Ecological Crowdfunding Web Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
