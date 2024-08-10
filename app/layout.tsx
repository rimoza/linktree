import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Linktree",
  description: "Connect with me on various platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
          {children}
        </div>
      </body>
    </html>
  );
}
