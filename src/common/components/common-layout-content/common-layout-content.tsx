import React from "react";
import { MenuHeader } from "../menu-header";
import { FooterCommon } from "../footer";
import { HeadBanner, HeadBannerProps } from "../head-banner";
import styles from "./common-layout.content.module.css";

type Props = {
  children: React.ReactNode;
  banner?: HeadBannerProps;
};

export const CommonLayoutContent: React.FC<Props> = ({ children, banner }) => {
  return (
    <div className={styles.appContainer}>
      {banner && <HeadBanner {...banner} />}
      <MenuHeader />
      <div className={styles.content}>{children}</div>
      <FooterCommon />
    </div>
  );
};
