import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sports Live',
  description: 'Watch live sports streams',
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
