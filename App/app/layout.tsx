import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HuyN's Message App",
  description: "Started just because I'm bored.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
