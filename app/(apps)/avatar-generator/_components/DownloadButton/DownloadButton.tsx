import { ComponentProps, ReactNode } from "react";
import downloadbutton from "./downloadbutton.module.css";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function DownloadButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(downloadbutton.button, "text-utility body medium")}
    >
      {children}
    </button>
  );
}
