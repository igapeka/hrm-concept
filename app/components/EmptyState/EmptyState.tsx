import classNames from "classnames";
import emptystate from "./emptystate.module.css";

interface Props {
  title?: string;
}

export default function EmptyState({
  title = "There's nothing here...",
}: Props) {
  return (
    <div
      className={classNames(emptystate.emptystate, "text-utility H4 medium")}
    >
      {title}
    </div>
  );
}
