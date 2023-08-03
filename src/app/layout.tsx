import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { MUIThemeProvider } from '@/shared/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Denis Klymenko Frontend',
  description: 'My name is Denis Klymenko and I\'m a frontend developer.',
  openGraph: {
    title: 'Denis Klymenko Frontend',
    images: [{
      url: 'https://media.licdn.com/dms/image/C5603AQH_4L0IFOsvUA/profile-displayphoto-shrink_800_800/0/1572770938564?e=1696464000&v=beta&t=hEOllCf5-2q6Obo6DiS-BM_2Ik6XH2CBGK24_GXzqzk',
      width: 200,
      height: 200,
    }],
    description: 'My name is Denis Klymenko and I\'m a frontend developer.',
    siteName: 'Denis Klymenko Frontend',
    url: 'https://denisklymenko-soft.com/',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Klymenko Frontend',
    description: 'My name is Denis Klymenko and I\'m a frontend developer.',
    site: '@site',
    creator: '@creator',
    images: [{
      url: 'https://media.licdn.com/dms/image/C5603AQH_4L0IFOsvUA/profile-displayphoto-shrink_800_800/0/1572770938564?e=1696464000&v=beta&t=hEOllCf5-2q6Obo6DiS-BM_2Ik6XH2CBGK24_GXzqzk',
      width: 200,
      height: 200,
    }],
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MUIThemeProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </MUIThemeProvider>
      </body>
    </html>
  );
}
