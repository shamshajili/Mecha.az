import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

// Fontları tanımlıyoruz
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", 
})

export const metadata: Metadata = {
  title: "MECHA.az | Building the Machine Layer of Tomorrow",
  description: "Cutting-edge provider of robotics, IoT solutions, and smart manufacturing software.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
