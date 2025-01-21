import type { Metadata, Viewport } from "next";
import "./global styles/reset.css";
import "./global styles/base-palette.css";
import "./global styles/color-theme.css";
import "./global styles/typography.css";
import { cormorant, inter } from "./fonts";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "KODE",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "f6f6f9" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
