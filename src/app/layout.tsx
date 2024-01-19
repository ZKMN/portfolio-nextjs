import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { MUIThemeProvider } from '@/shared/providers';
import { WebVitals } from '@/shared/UI';

import './globals.css';

const inter = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Denis Klymenko Frontend',
  description: 'I have over 7 years of experience. I have no expired estimates. I have experience working with large companies and large teams.',
  applicationName: 'Denis Klymenko Portfolio',
  authors: { name: 'Denis Klymenko', url: 'https://www.linkedin.com/in/denis-klymenko/' },
  keywords: ['React', 'Frontend Developer', 'Denis Klymenko'],
  openGraph: {
    title: 'Denis Klymenko Frontend',
    description: 'I have over 7 years of experience. I have no expired estimates. I have experience working with large companies and large teams.',
    siteName: 'Denis Klymenko Frontend',
    url: 'https://denisklymenko-soft.com/',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://media.licdn.com/dms/image/C5603AQH_4L0IFOsvUA/profile-displayphoto-shrink_800_800/0/1572770938564?e=1696464000&v=beta&t=hEOllCf5-2q6Obo6DiS-BM_2Ik6XH2CBGK24_GXzqzk',
      width: 100,
      height: 100,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Klymenko Frontend',
    description: 'I have over 7 years of experience. I have no expired estimates. I have experience working with large companies and large teams.',
    site: 'https://denisklymenko-soft.com/',
    creator: 'Denis Klymenko',
    images: [{
      url: 'https://media.licdn.com/dms/image/C5603AQH_4L0IFOsvUA/profile-displayphoto-shrink_800_800/0/1572770938564?e=1696464000&v=beta&t=hEOllCf5-2q6Obo6DiS-BM_2Ik6XH2CBGK24_GXzqzk',
      width: 100,
      height: 100,
    }],
  },
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebVitals />

        <MUIThemeProvider>
          <Header />

          <main>{children}</main>

          <Footer />

          <Analytics />
        </MUIThemeProvider>
      </body>
    </html>
  );
}
