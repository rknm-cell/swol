import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Fruktur } from "next/font/google";

export const metadata: Metadata = {
  title: "swöll - Your Complete Fitness Tracker",
  description: "Track your weight, workouts, nutrition, and achieve your fitness goals with AI-powered recommendations. The ultimate fitness companion for your journey.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fruktur = Fruktur({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-fruktur",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${fruktur.variable}`}>
      <body>{children}</body>
    </html>
  );
}
