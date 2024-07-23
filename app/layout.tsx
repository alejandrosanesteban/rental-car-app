import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental Car AleCars",
  description: "Rental Cars Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader color="#000"/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
