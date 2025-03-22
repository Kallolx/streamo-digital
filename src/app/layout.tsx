import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/GlobalBackground";
import LoadingProvider from "@/providers/LoadingProvider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Streamo Digital",
  description: "Music distribution and artist services platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="font-dm-sans bg-black">
        <LoadingProvider>
          <GlobalBackground />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
