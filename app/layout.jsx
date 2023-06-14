import './globals.scss'
import { Georama } from 'next/font/google'
import { Kulim_Park } from 'next/font/google'
import Footer from './footer'

const georama = Georama({ 
  weight: ["200", "300", "400", "600", "700"],
  subsets: ['latin']
 })
const kulim_park = Kulim_Park({ 
  weight: ["200", "300", "400", "600", "700"],
  subsets: ['latin']
})

export const metadata = {
  title: 'C&P',
  description: 'Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
