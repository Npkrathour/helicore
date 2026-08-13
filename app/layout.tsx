import type { Metadata } from "next";
import { Abhaya_Libre, Inter } from "next/font/google";
import "./globals.css";

const abhaya = Abhaya_Libre({
  variable: "--font-abhaya",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ada Psychiatry | Mental Health Provider",
  description:
    "Empathetic, comfortable, and warm care meeting all your mental health needs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${abhaya.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

