"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IMenuItem } from "../../interfaces";
import styles from "./link-item-mobile.module.css";
import Link from "next/link";

type Props = {
  item: IMenuItem;
  handleClose(): void;
};

export const LinkItemMobile: React.FC<Props> = ({ handleClose, item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${styles.linkItem} ${
        pathname === item.path ? styles.linkItemActive : ""
      }`}
      href={item.path}
      onClick={handleClose}
    >
      <span>{item.label}</span>
    </Link>
  );
};
