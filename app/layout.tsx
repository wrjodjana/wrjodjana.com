import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const quattro = localFont({
  src: [
    { path: "./fonts/iAWriterQuattroS-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/iAWriterQuattroS-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/iAWriterQuattroS-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/iAWriterQuattroS-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-quattro",
});

export const metadata: Metadata = {
  title: "Warren Jodjana",
  description: "I experiment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quattro.variable} antialiased`}>{children}</body>
    </html>
  );
}
