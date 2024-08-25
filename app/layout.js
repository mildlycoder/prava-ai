import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Prava",
  description:
    "Get Answers from our AI Chatbot on Remittance Tax, Compliance, and Fast Payments",
  keywords: [
    "taxes, remittace tax",
    "compliance",
    "fast payments",
    "blockchain",
    "cross-border",
    "US",
    "UAE",
    "India",
    "low fees",
  ],
  openGraph: {
    title: "Prava",
    description: "Get Answers from our AI Chatbot on Remittance Tax, Compliance, and Fast Payments",
    url: "https://www.prava.space",
    siteName: "Prava",
    images: [
      {
        url: "https://prava.space/og.png",
        width: 1800,
        height: 1600,
      },
      {
        url: "https://www.prava.space/og.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  return (
    <html lang="en">
      <body className="font-inter">
      <GoogleAnalytics gaId="G-KKR7EJ1KKR" />
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
