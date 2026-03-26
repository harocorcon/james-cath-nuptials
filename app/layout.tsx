import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Parisienne } from "next/font/google";
import "./globals.css";

export const parisienne = Parisienne({
  subsets: ["latin"],
  variable: "--font-parisienne",
  weight: "400",
})

const playfair = Playfair_Display({ subsets: ["latin"] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James | Cath",
  description: "Wedding Invitation for James and Catherine",

  openGraph: {
    title: "James & Catherine Wedding",
    description: "Join us on our special day 💍",
    url: "https://james-cath-nuptials.vercel.app",
    siteName: "Wedding Invitation",
    images: [
      {
        // url: "/couple.png", // must be in /public
        url: "https://james-cath-nuptials.vercel.app/couple.png",
        width: 1200,
        height: 630,
        alt: "James & Catherine",
      },
    ],
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // className={`${playfair.className} h-full antialiased`}
    >
      <body className={`${playfair.className} min-h-full flex flex-col`}>
        <div className="w-full max-w-md min-h-screen bg-white shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}
