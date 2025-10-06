import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { Metadata } from "next";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Artleap AI | Transform your photos with AI",
  description: "Transform your photos with the power of AI using Artleap.",
  icons: {
    icon: "/assets/images/artleap-svg-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="relative min-h-screen bg-black text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
