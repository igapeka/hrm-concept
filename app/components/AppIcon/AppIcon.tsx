import classNames from "classnames";
import appicon from "./appicon.module.css";
import Link from "next/link";

interface Props {
  appName: string;
  href: string;
  isExternal: boolean | undefined;
}

export default function AppIcon({ appName, href, isExternal }: Props) {
  return (
    <Link href={href} target={isExternal ? "_blank" : "_self"}>
      <div
        className={classNames(appicon.centerizer, "text-utility small regular")}
      >
        <div className={appicon.appicon}>
          {/* TODO add image */}
          <div className={appicon.ring}></div>
        </div>
        {appName}
      </div>
    </Link>
  );
}
