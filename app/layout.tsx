import type { Metadata, Viewport } from "next";
import { Literata } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-letter",
});

const description =
  "Justin Jia: AI Product Manager in Bellevue, Washington. Founder, Remex Studio.";

export const metadata: Metadata = {
  metadataBase: new URL("https://justin-jia.vercel.app"),
  title: {
    default: "Justin Jia",
    template: "%s · Justin Jia",
  },
  description,
  openGraph: {
    title: "Justin Jia · AI Product Manager",
    description,
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "Justin Jia",
  },
  twitter: {
    card: "summary",
    title: "Justin Jia · AI Product Manager",
    description,
    creator: "@QinlinJ",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={literata.variable}>
      <body
        className={`${literata.className} flex min-h-dvh flex-col antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main" className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
