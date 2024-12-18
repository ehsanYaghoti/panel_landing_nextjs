import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import StoreProvider from "./StoreProvider";
import { Geist, Geist_Mono , Nunito ,Montserrat } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const nunito = Nunito({
  weight : ['200' , '300' , '400' , '500' , '600' , '700' , '800' , '900' , '1000'],
  subsets : ['latin'],
  display : 'swap'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panel challenge",
  description: "Panel challenge by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="scroll-smooth " >
        <StoreProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${nunito.className} antialiased`}
        >
          {children}
          <ToastContainer />  
        </body>
        </StoreProvider>

      </html>
  );
}
