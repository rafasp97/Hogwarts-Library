import "@/styles/global.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hogwarts Library",
  description: "Explore os personagens de Harry Potter de forma interativa",
  icons: {
    icon: "/images/magic.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="root-layout">
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}