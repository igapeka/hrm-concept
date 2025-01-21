import { ReactNode } from "react";
import verticalcarousel from "./verticalcarousel.module.css";

interface Props {
  children: ReactNode;
}

export default function VerticalCarousel({ children }: Props) {
  return <div className={verticalcarousel.widget}>{children}</div>;
}
