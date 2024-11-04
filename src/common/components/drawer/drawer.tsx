"use client";

import React from "react";
import styles from "./drawer.module.css";

type Props = {
  isOpen: boolean;
  handleClose(): void;
  children: React.ReactNode;
};

export const Drawer: React.FC<Props> = ({ isOpen, handleClose, children }) => {
  return (
    <div
      className={`${styles.drawer} ${isOpen ? "" : styles.drawerNotVisible}`}
    >
      <div className={styles.backdrop} onClick={handleClose}></div>
      <div className={styles.content}>
        <div className={styles.closeButtonContainer} onClick={handleClose}>
          <button className={styles.closeButton} onClick={handleClose}>
            <span className={styles.closeButtonIcon}>+</span>
          </button>
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};
