import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Mecha.az</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-black text-white pt-20">
        <Navbar />
        <div className="mt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
