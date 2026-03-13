import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Motion Cure Physiotherapy Clinic - Peshawar",
  description: "Expert Care. Pain-Free Life. No Surgery Required.",
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
