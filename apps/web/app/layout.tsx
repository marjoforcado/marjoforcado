import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "../public/fonts/RemixIcon_Font/remixicon.css";

import { Navbar } from "@/client_only";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "py-3 space-y-9")}>
        <div className="container">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
