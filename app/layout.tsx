import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Inter } from "next/font/google";
import AppProviders from "@app/providers";
import { ToastContainer } from "react-toastify";

import "@shared/styles/reset.scss";
import "@shared/styles/variables.scss";
import "@shared/styles/globals.scss";
import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@widgets/Header";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-family",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AppProviders>
          <Header/>
          
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer position="top-right" closeOnClick newestOnTop={false} />
        </AppProviders>
      </body>
    </html>
  );
}
