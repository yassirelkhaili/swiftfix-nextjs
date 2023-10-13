import './globals.css'
import Header from './partials/Header'
import Footer from './partials/Footer'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Plus_Jakarta_Sans, Poppins} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SwiftFix | Home Services',
  description: "Over the years, we've mastered the art of reviving spaces, from patching up leaky roofs to refurbishing kitchens. With each project, we strive to narrate a tale of quality craftsmanship, reliability, and genuine care. We invite you to be a part of our story, where we envision a home that mirrors your dreams and reflects our commitment to excellence."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        Header
        {children}
        </body>
    </html>
  )
}
