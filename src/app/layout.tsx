import type { Metadata } from "next";
import { Lexend } from 'next/font/google'
import "./globals.css";

const fontLexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ADeswanta - Official Website",
  description: "ADeswanta Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontLexend.className} ${fontLexend.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
