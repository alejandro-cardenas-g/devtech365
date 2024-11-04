"use client";

import { useMediaQuery } from "@/common/hooks";
import React from "react";
import { MenuDesktop } from "../menu-desktop/menu-desktop";
import { MenuMobile } from "../menu-mobile/menu-mobile";
import { IMenuItem } from "../../interfaces";

const linkItems: IMenuItem[] = [
  {
    key: "0",
    path: "/",
    label: "Home",
  },
  {
    key: "1",
    path: "/services",
    label: "Services",
  },
  {
    key: "2",
    path: "/about",
    label: "About us",
  },
  {
    key: "3",
    path: "/contact",
    label: "Contact",
  },
];

export const MenuContent = () => {
  const { isBreak: isMobile } = useMediaQuery(768);
  if (isMobile) return <MenuMobile linkItems={linkItems} />;
  return <MenuDesktop linkItems={linkItems} />;
};
