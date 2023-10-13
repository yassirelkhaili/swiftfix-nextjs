import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        {children}
        </body>
    </html>
  )
}
