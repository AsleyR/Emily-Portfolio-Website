import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";
import Navbar from "./(components)/navbar/Navbar";
import "./globals.css";
import Footer from "./(components)/footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emily Lim",
  description: "Emily Lim's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased 
        scroll-smooth transition-all`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
