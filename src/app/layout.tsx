import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import SocialSidebar from "@/components/socialSidebar";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Qintella | Leading Software Development & IT Consulting Services",
    template: "%s | Qintella"
  },
  description: "Qintella provides cutting-edge software development, mobile apps, and IT consulting services to help businesses scale and innovate.",
  metadataBase: new URL("https://www.qintella.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Qintella | Leading Software Development & IT Consulting Services",
    description: "Qintella provides cutting-edge software development, mobile apps, and IT consulting services to help businesses scale and innovate.",
    url: "https://www.qintella.com",
    siteName: "Qintella",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/logo_icon.png",
        width: 800,
        height: 600,
        alt: "Qintella Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qintella | Leading Software Development & IT Consulting Services",
    description: "Qintella provides cutting-edge software development, mobile apps, and IT consulting services to help businesses scale and innovate.",
    images: ["/img/logo_icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Qintella",
  "url": "https://www.qintella.com",
  "logo": "https://www.qintella.com/img/logo_icon.png",
  "sameAs": [
    "https://www.linkedin.com/company/qintella",
    "https://www.instagram.com/qintella"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "customer service"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="kmrdel5m0oxgskeab9pirtwm8uffkr" />
        {/* Font Awesome CDN for social icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" type="image/png" href="https://web.quintessentialtech.com/wp-content/uploads/2026/03/Color_Icon.png" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KJ49R8VF');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1979719306230477');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1979719306230477&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJ49R8VF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag (gtag.js) */}

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W08YQ44RB0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W08YQ44RB0');
          `}
        </Script>
        <JsonLd data={organizationData} />
        {children}

        <SocialSidebar />
        <Toaster />
      </body>
    </html>
  );
}
