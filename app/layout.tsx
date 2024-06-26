import AOSSection from "@/components/AOS";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CodingBrackets: Crafting Tomorrow's Web Today",
  description:
    "Complete Web Development Services with over 10 years of experience in NodeJs, WordPress, CodeIgniter, Laravel, ReactJs and Cloud Computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={manRope.className}>
        <Provider>
          <NavBar />
          <main className="max-w-[100vw] overflow-x-hidden">{children}</main>
          <Footer />
        </Provider>
      </body>
      <AOSSection />
    </html>
  );
}
