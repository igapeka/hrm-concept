import { Inter, Cormorant_Infant } from 'next/font/google'
 
export const cormorant = Cormorant_Infant({
    weight: ["300", "500", "700"],
    style: "italic",
    subsets: ["latin", "cyrillic"],
    variable: "--font-cormorant",
    display: 'swap',
})
 
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: 'swap',
})

export type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TextSize =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "large"
  | "body"
  | "small"
  | "caption";

export type TextWeight = "regular" | "medium" | "bold";