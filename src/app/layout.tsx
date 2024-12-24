import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import MotionOptimize from "utils/Motion";
import Header from "components/Header";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const Novante = localFont({
  src: [
    {
      path: "../fonts/Novante.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-novante",
});

export const metadata: Metadata = {
  title: "The View Island • Sumeet Kumar Paul",
  description: "Latest articles in one place • Sumeet Kumar Paul",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const NextFont = `${inter.className} ${Novante.variable}`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NextFont} overflow-y-scroll antialiased`}>
        <MotionOptimize>
          <Suspense>
            <Header />
          </Suspense>
          <main id="page-id">{children}</main>
        </MotionOptimize>
      </body>
    </html>
  );
}
