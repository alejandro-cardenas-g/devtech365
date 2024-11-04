"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Drawer } from "@/common/components";
import { IMenuItem } from "../../interfaces";
import styles from "./menu-mobile.module.css";
import { LinkItemMobile } from "../link-item-mobile/link-item-mobile";

type Props = {
  linkItems: IMenuItem[];
};

export const MenuMobile: React.FC<Props> = ({ linkItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Image
        className={styles.icon}
        src="icons/burguer-menu.svg"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setIsOpen(true)}
      />
      <Drawer isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <div className={styles.menu}>
          {linkItems.map((item) => (
            <LinkItemMobile
              key={item.key}
              item={item}
              handleClose={() => setIsOpen(false)}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
};
