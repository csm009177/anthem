import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChildrenProps } from "./(pages)/ChildrenProps";
import Head from "./ui/head";
import Foot from "./ui/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='ko'>
      <body className='flex flex-col justify-between h-screen w-screen overflow-hidden'>
        <Head/>
        {children}
        <Foot/>
      </body>
    </html>
  );
}
