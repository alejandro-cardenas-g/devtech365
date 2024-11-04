import React from "react";
import { IMenuItem } from "../../interfaces";
import styles from "./menu-desktop.module.css";
import { LinkItem } from "../link-item/link-item";

type Props = {
  linkItems: IMenuItem[];
};

export const MenuDesktop: React.FC<Props> = ({ linkItems }) => {
  return (
    <div className={styles.container}>
      {linkItems.map((item) => (
        <LinkItem key={item.key} item={item} />
      ))}
    </div>
  );
};
