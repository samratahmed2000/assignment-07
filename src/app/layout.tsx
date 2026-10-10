import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/Navbar";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/shared/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ContextProvider from "@/context/ContextApi";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Assignment 07 - Bazar Dor",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth">
      <body
        className={`min-h-full flex flex-col bg-[#f0f5f0] ${hindSiliguri.className}`}
      >
        <ContextProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
          <SpeedInsights />
          <Analytics />
        </ContextProvider>
      </body>
    </html>
  );
}
