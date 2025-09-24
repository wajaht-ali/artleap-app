
import { Navbar } from "./Common/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Artleap AI | Transform your photos with AI",
  description: "Transform your photos with the power of AI using Artleap.",
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="relative">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
