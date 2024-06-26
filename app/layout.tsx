import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import ProgressBarProvider from "../components/ProgressBarProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plex-serif",
});

export const metadata: Metadata = {
  title: "FinMate",
  description:
    "All your finances in one application. Made with love by Soumyajyoti Dey",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </body>
    </html>
  );
}
