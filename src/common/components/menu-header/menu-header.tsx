import Image from "next/image";
import styles from "./menu-header.module.css";
import { MenuContent } from "./children";

export const MenuHeader = () => {
  return (
    <header className={styles.menuHeader}>
      <Image
        src="/logo-devtech365.png"
        height={70}
        width={70}
        alt="logo-devtech365"
      />
      <MenuContent />
    </header>
  );
};
