"use client";

import Image from "next/image";
import styles from "./not-found.module.css";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";

export const NotFound = () => {
  const pathname = usePathname();
  if (pathname !== "/not-found") redirect("/not-found");
  return (
    <main className={styles.container}>
      <div className={styles.image}>
        <Image
          className={styles.notFoundImage}
          src="/images/not-found.png"
          alt="Not found"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.content}>
        <span>404</span>
        <h2>Oops. This page has gone missing.</h2>
        <p>You may have mistyped the address or the page may have moved.</p>
        <Link className={styles.goHome} href="/">
          Go to Home
        </Link>
      </div>
    </main>
  );
};
