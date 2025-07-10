import Header from "@/features/Components/header/Header";

import type { Metadata } from "next";
import LeftSideBar from "@/features/Components/leftSideBar/LeftSideBar";

export const metadata: Metadata = {
  title: "My Novel | Read and Explore Captivating Stories",
  description:
    "A literary haven for novel lovers. Discover compelling narratives, diverse genres, and heartfelt stories.",
  keywords: [
    "novels",
    "literature",
    "stories",
    "fiction",
    "romance",
    "mystery",
    "reading community",
  ],
  authors: [{ name: "My Novel Team", url: "https://mynovel.com" }],
  creator: "My Novel Team",
  themeColor: "#ffffff",
  openGraph: {
    title: "My Novel | Read and Explore Captivating Stories",
    description:
      "A literary haven for novel lovers. Discover compelling narratives, diverse genres, and heartfelt stories.",
    url: "https://mynovel.com",
    siteName: "My Novel",
    images: [
      {
        url: "https://mynovel.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Novel Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Novel | Read and Explore Captivating Stories",
    description:
      "A literary haven for novel lovers. Discover compelling narratives, diverse genres, and heartfelt stories.",
    images: ["https://mynovel.com/twitter-image.jpg"],
    creator: "@mynovel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-y-hidden">
      <header>
        <Header />
      </header>
      <section className="flex pt-16">
        <LeftSideBar />
        <main
          style={{ height: "calc(100vh - 4rem)" }}
          className="flex-1 scrollbar-hide overflow-y-auto bg-gray-50"
        >
          {children}
        </main>
      </section>
    </div>
  );
}
