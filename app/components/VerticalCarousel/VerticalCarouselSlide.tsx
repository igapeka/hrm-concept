import TextUtility from "../TextUtility/TextUtility";
import verticalcarousel from "./verticalcarousel.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  alt: string;
  title?: string;
  message?: string;
}

export default function VerticalCarouselSlide({
  src,
  alt,
  title,
  message,
}: Props) {
  return (
    <div className={verticalcarousel.slide}>
      <Image className={verticalcarousel.img} src={src} alt={alt} />
      {(title || message) && (
        <div className={verticalcarousel.overlay}>
          <TextUtility size="large" weight="medium">
            {title}
          </TextUtility>
          <TextUtility size="small" weight="regular">
            {message}
          </TextUtility>
        </div>
      )}
      <div className={verticalcarousel.border}></div>
    </div>
  );
}
