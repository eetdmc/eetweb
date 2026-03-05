import "../globals.css";

export default function PlainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
