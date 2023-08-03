import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { MUIThemeProvider } from '@/shared/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cater',
  description: 'Catering',
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
