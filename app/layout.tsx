import type { Metadata } from "next";
import { Montserrat, Playfair } from "next/font/google";
import Navbar from "./(components)/navbar/Navbar";
import "./globals.css";
import Footer from "./(components)/footer/Footer";
import { NavbarMenuProvider } from "./(context)/NavbarMenuContext";
import MobileNavbarLinks from "./(components)/navbar/mobile-navbar/MobileNavbarLinks";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
})

const playfair = Playfair({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emily Lim",
  description: "Emily Lim's Personal Portfolio Website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased 
        scroll-smooth transition-all relative font-sans text-main`}
      >
        <NavbarMenuProvider>
          <Navbar />
          <MobileNavbarLinks />
        </NavbarMenuProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
