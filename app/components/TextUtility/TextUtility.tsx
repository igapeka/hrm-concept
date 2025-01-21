import { ComponentPropsWithoutRef, ReactNode } from "react";
import { TextElement, TextSize, TextWeight } from "@/app/fonts";
import classNames from "classnames";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children: ReactNode;
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
}

export default function TextUtility({
  as: Tag = "p",
  size = "body",
  weight = "regular",
  children,
  className,
  ...props
}: Props) {
  const innerClasses = ["text-utility", size, weight];
  const classes = classNames(innerClasses, className);
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
