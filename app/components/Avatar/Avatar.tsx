import avatar from "./avatar.module.css";
import Image from "next/image";
import pig from "/public/pig.jpg";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  size?: number;
  src?: string;
}

export default function Avatar({ size = 36, src }: Props) {
  const styles = {
    width: `${size}px`,
  };
  return (
    <div style={styles} className={avatar.avatar}>
      <Image
        className={avatar.img}
        src={!src ? pig : src}
        alt={"avatar"}
        placeholder="blur"
      ></Image>
      <div className={avatar.ring}></div>
    </div>
  );
}
