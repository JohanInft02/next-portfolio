"use client"

import "./globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Loading from "@/components/loading"
import type React from "react"
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  )
}

