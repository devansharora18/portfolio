import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsmono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devansh Arora\'s Portfolio',
  description: 'Devansh Arora\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
