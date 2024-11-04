import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CommonLayoutContent } from "@/common/components";
import "./globals.css";

const fontMontserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevTech365",
  description: "IT Consulting and development",
  keywords: ["consulting", "technology", "development", "IT", "saas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontMontserrat.className}>
        <CommonLayoutContent>{children}</CommonLayoutContent>
      </body>
    </html>
  );
}
