import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { MUIThemeProvider } from '@/shared/providers';

import './globals.css';

const inter = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Denis Klymenko Senior Frontend Developer',
  description: 'Senior Frontend Developer, Javascript, React, NextJs, REST, GraphQl',
  applicationName: 'Denis Klymenko CV',
  authors: { name: 'Denis Klymenko', url: 'https://www.linkedin.com/in/denis-klymenko/' },
  keywords: ['Javascript', 'React', 'NextJs', 'REST', 'GraphQl', 'Senior Frontend Developer', 'Denis Klymenko'],
  openGraph: {
    title: 'Denis Klymenko Senior Frontend Developer',
    description: 'Senior Frontend Developer, Javascript, React, NextJs, REST, GraphQl',
    siteName: 'Denis Klymenko Senior Frontend Developer',
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
    title: 'Denis Klymenko Senior Frontend Developer',
    description: 'Senior Frontend Developer, Javascript, React, NextJs, REST, GraphQl',
    site: 'https://denisklymenko-soft.com/',
    creator: 'Denis Klymenko',
    images: [{
      url: 'https://media.licdn.com/dms/image/C5603AQH_4L0IFOsvUA/profile-displayphoto-shrink_800_800/0/1572770938564?e=1696464000&v=beta&t=hEOllCf5-2q6Obo6DiS-BM_2Ik6XH2CBGK24_GXzqzk',
      width: 100,
      height: 100,
    }],
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const jsonLd = {
    '@id': 'https://www.linkedin.com/in/denis-klymenko/',
    '@type': 'Senior Frontend Developer',
    name: 'Denis Klymenko Senior Frontend Developer Developer',
    image: 'https://media.licdn.com/dms/image/C5603AQH_4L0IFOsvUA/profile-displayphoto-shrink_800_800/0/1572770938564?e=1696464000&v=beta&t=hEOllCf5-2q6Obo6DiS-BM_2Ik6XH2CBGK24_GXzqzk',
    description: 'Senior Frontend Developer, Javascript, React, NextJs, REST, GraphQl',
  };

  return (
    <html lang="en">
      <body className={inter.className}>

        <MUIThemeProvider>
          <Header />

          <main>{children}</main>

          <Footer />

          <Analytics />
        </MUIThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
