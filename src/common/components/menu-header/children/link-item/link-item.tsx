"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IMenuItem } from "../../interfaces";
import styles from "./link-item.module.css";

type Props = {
  item: IMenuItem;
};

export const LinkItem: React.FC<Props> = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${styles.linkItem} ${
        pathname === item.path ? styles.linkItemActive : ""
      }`}
      href={item.path}
    >
      <span>{item.label}</span>
    </Link>
  );
};
