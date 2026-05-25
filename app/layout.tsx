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
  title: "Marketrixa | Best Digital Marketing Company in Ahmedabad",
  description:
    "Marketrixa is the best digital marketing company in Ahmedabad & Deesa. SEO, Google Ads, social media & web. 50+ brands. Book a free Consultation today.",
  keywords:
    "digital marketing agency, SEO company, website development company, social media marketing, PPC services, branding agency, online marketing services, Marketrixa, SEO services India, web design company",
  verification: {
    google: "_-nwverD8yPqmyWX6jgsE_1CRjzpZfMzq1AC5ENuNR4",
  },
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "Scale Your Business with Smart Digital Solutions | Marketrixa",
    description:
      "Grow your business with performance-driven digital marketing.",
    url: "https://www.marketrixa.com/",
    siteName: "Marketrixa",
    images: [
      {
        url: "/home-og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketrixa",
    description: "Scale your business with smart digital solutions",
    images: ["/home-og-image.png"],
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
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-3TC7E1K347">
          </script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-3TC7E1K347');
              `}
          </script>
        </>

        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '953255090434595');
            fbq('track', 'PageView');`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=953255090434595&ev=PageView&noscript=1"
            />
          </noscript>
        </>
      </body>
    </html>
  );
}
