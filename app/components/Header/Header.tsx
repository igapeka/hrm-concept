"use client";

import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import KODELogo from "../KODELogo/KODELogo";
import header from "./header.module.css";
import TextFancy from "../TextFancy/TextFancy";
import { usePathname } from "next/navigation";
import { applist } from "@/app/applist";

export default function Header() {
  const pathname = usePathname().split("/")[1]; // "/dom/foo" -> "dom"
  const currentApp = applist.filter((app) => app.id.includes(pathname))[0];
  const currentAppName = currentApp.name;
  return (
    <div className={header.header}>
      <div className={header.logonamewrap}>
        <Link href={"/"}>
          <KODELogo />
        </Link>
        <TextFancy className={header.appname} size="large">
          {pathname && currentAppName}
        </TextFancy>
      </div>
      <Avatar size={28} />
    </div>
  );
}
