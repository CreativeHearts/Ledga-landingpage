import type { Metadata } from 'next';
// import { Inter, Rubik } from 'next/font/google';
import './globals.css';
import Header from '@/ui/header';
import Footer from '@/ui/footer';
// const rubik = Rubik({ subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ledga Finance',
  description: 'Build your financial ecosystem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`rubik.className overflow-x-hidden bg-white`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
