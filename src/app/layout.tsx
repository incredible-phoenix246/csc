import type { Metadata } from "next";
import "../styles/globals.css";
import { inter, jaka, workSans } from "@/fonts";
import StateContextProvider from "@/context/StateCtx";
import React from "react";

export const metadata: Metadata = {
  title: "Nigeria Police Academy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateContextProvider>
        <body
          className={`${inter.variable} ${jaka.variable} ${workSans.className} bg-back`}
        >
          {children}
        </body>
      </StateContextProvider>
    </html>
  );
}
