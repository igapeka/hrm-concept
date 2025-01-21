import { ReactNode } from "react";
import verticalcarousel from "./verticalcarousel.module.css";

interface Props {
  numberOfSlides: number;
  children: ReactNode;
}

export default function VerticalCarousel({ numberOfSlides, children }: Props) {
  const array = Array.from({ length: numberOfSlides }, (v, i) => i + 1);
  return (
    <div className={verticalcarousel.container}>
      <div className={verticalcarousel.widget}>{children}</div>
      <div className={verticalcarousel.dotsFamily}>
        {array.map((item) => (
          <div key={item} className={verticalcarousel.dot}></div>
        ))}
      </div>
    </div>
  );
}
