import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "The Motion Cure Physiotherapy Clinic - Peshawar",
  description: "Expert Care. Pain-Free Life. No Surgery Required.",
  icons: [
    { rel: "icon", url: "/logo.png", type: "image/png" },
    { rel: "shortcut icon", url: "/logo.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/logo.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Sidebar />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
