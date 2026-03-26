import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "James | Cath Wedding Invitation",
  description: "You are invited 💍",

  openGraph: {
    title: "James & Cath",
    description: "April 25, 2026 • You are invited",
    url: "https://james-cath-nuptials.vercel.app",
    images: [
      {
        url: "https://james-cath-nuptials.vercel.app/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function InviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}