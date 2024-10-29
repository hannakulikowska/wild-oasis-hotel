import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
