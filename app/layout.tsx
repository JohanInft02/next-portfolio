"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Loading from "@/components/loading";
import type React from "react";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Portafolio | Johan Infante" />
        <meta name="author" content="Johan Infante" />
        <meta name="keywords" content="nextjs, tailwindcss, portfolio, portafolio, react, java, johan, infante" />
        <title>Portafolio | Johan Infante</title>
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="min-h-screen bg-gradient-to-b from-[#f8f7fd] to-[#b9f9fb] dark:from-[#1a1f37] dark:to-[#0c0f1a] theme-transition">
              <Header />
              {children}
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
