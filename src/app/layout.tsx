import type { Metadata } from "next";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

export const metadata: Metadata = {
  title: "FoodHub",
  description: "Healthy exeryday!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
