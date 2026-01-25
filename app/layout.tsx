import type React from "react"
import type { Metadata } from "next"
import { Roboto, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "КП Аксаково - Коттеджный поселок в Подмосковье",
  description:
    "КП Аксаково - комфортный коттеджный поселок в северной части Подмосковья, в 20 км от МКАД по Дмитровскому шоссе",
  keywords: "КП Аксаково, коттеджный поселок, Подмосковье, Дмитровское шоссе, недвижимость",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} ${openSans.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
