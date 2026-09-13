import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Justin Jia",
    template: "%s · Justin Jia",
  },
  description:
    "Justin Jia: AI Product Manager in Bellevue, Washington. Founder, Remex Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
