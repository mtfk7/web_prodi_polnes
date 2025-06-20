import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teknologi Informasi POLNES',
  description: 'Program D4 Rekayasa Informatika Multimedia - Membangun Kreativitas dan Teknologi. Jurusan Teknologi Informasi yang unggul dalam pengembangan multimedia interaktif.',
  generator: '',
  icons: {
    icon: '/logo-ti.png',
    shortcut: '/logo-ti.png',
    apple: '/logo-ti.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
