import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from 'next/font/google';
import AppProviders from '@app/providers';
import { ToastContainer } from 'react-toastify';

import '@shared/styles/reset.scss';
import '@shared/styles/variables.scss';
import '@shared/styles/globals.scss';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer/Footer';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-family',
  display: 'swap',
});
export const metadata = {
  title: 'ВолонтёрТайм',
  description: 'ВолонтёрТайм - волонтёрская платформа для волонтёров и организаторов',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AppProviders>
          <div className="app-shell">
            <header className="header">
            <Header />

            </header>
            <main className="app-main">{children}</main>
            <footer className='footer'>

            <Footer />
            </footer>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer
            position="top-right"
            closeOnClick
            newestOnTop={false}
          />
        </AppProviders>
      </body>
    </html>
  );
}
