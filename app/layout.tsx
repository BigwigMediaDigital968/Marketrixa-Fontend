import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import WhatsappFloat from "./component/website/WhatsappFloat";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Marketrixa | Scale Your Business with Smart Digital Solutions",
  description:
    "Marketrixa is a digital innovative agency delivering cutting-edge solutions in web development, branding, and online promotions to help businesses grow and stand out in the modern digital landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <WhatsappFloat />
      </body>
    </html>
  );
}
