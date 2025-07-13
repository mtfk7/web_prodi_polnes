import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_NAME = 'Teknologi Informasi POLNES';
const SITE_URL = 'https://trk.polnes.ac.id';
const SITE_DESCRIPTION = 'Jurusan Teknologi Informasi yang unggul dalam pengembangan multimedia interaktif, pemrograman, dan teknologi terkini.';

const keywords = [
  'Teknologi Informasi',
  'POLNES',
  'Rekayasa Informatika',
  'Multimedia',
  'Politeknik Negeri Samarinda',
  'Pendidikan Vokasi',
  'Teknologi Digital',
  'Pemrograman',
  'Desain Grafis',
  'Pengembangan Web',
  'Mobile Development',
  'Bidikmisi',
  'Kuliah Teknologi',
  'D4 Teknologi Informasi',
];

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a56db',
};

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: keywords,
  generator: 'Next.js',
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: '@polnes',
    images: ['/twitter-image.jpg'], // Replace with your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add your Google verification code
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE', // Add your Yandex verification code if needed
  },
  icons: {
    icon: [{ url: '/logo-polnes2.png', sizes: '32x32', type: 'image/png' }, { url: '/logo-polnes2.png', sizes: '16x16', type: 'image/png' }, { url: '/favicon.ico' }],
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo-polnes2.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo-polnes2.png',
        color: '#059669',
      },
    ],
  },
  manifest: '/manifest.json', // PWA manifest file
  other: {
    'msapplication-TileColor': '#1a56db',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
