import { Metadata } from "next";
import "../styles/globals.css";


 export const metadata: Metadata = {
   title: "My Novel | Read and Explore Captivating Stories",
   description:
     "A literary haven for novel lovers. Discover compelling narratives, diverse genres, and heartfelt stories.",
   icons: {
     icon: "/BookOpen.svg",
   },
   authors: [{ name: "My Novel Team", url: "https://mynovel.com" }],
 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 

  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
