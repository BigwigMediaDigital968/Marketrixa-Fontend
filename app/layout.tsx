import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import WhatsappFloat from "./component/website/WhatsappFloat";
import Script from "next/script";

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
  icons: {
    icon: "/favicon.jpg",
  },
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

        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '953255090434595');
fbq('track', 'PageView');`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
          style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=953255090434595&ev=PageView&noscript=1"
            />
          </noscript>
        </>
      </body>
    </html>
  );
}
