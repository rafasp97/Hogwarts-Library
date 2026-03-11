import "@/styles/global.scss";

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
