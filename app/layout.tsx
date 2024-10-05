import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOlWish",
  description: "Make your wish come through today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
