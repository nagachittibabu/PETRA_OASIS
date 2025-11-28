import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petra Oasis Electromechanical Services",
  description:
    "Credible, committed, and cost-efficient electro-mechanical solutions delivered by expert engineers across UAE.",
  keywords: [
    "Petra Oasis",
    "Petra Oasis groups",
    "Petra Oasis",
    "MEP services UAE",
    "electro-mechanical contracting",
    "technical services Dubai",
    "man power supply in uae",
    "HVAC, plumbing, electrical",
  ],
  authors: [{ name: "Petra Oasis Electromechanical Services Team", url: "https://petraoasis.com" }],
  creator: "Petra Oasis Electromechanical Services",
  publisher: "Petra Oasis Electromechanical Services",
  metadataBase: new URL("https://petraoasis.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Petra Oasis Electromechanical Services",
    description:
      "Trusted partner for high-quality electro-mechanical contracting and technical services in UAE.",
    url: "https://petraoasis.com",
    siteName: "Petra Oasis Electromechanical Services",
    images: [
      {
        url: "https://petraoasis.com/images/companylogo.png",
        width: 1200,
        height: 630,
        alt: "Petra Oasis Electromechanical Services Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petra Oasis Electromechanical Services",
    description:
      "Delivering excellence in electro-mechanical contracting across UAE.",
    images: ["https://petraoasis.com/images/og-banner.png"],
    creator: "@petraoasis",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
       </body>
    </html>
  );
}
