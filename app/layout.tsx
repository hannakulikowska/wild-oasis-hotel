import type { Metadata } from "next";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
})

import Header from "@/app/_components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome to The Wild Oasis"
  },
  description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 grid px-8 py-12">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
