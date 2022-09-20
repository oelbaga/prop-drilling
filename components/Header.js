import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import styles from "./Header.module.scss";
export default function Header() {
  useEffect(() => {
    console.log("Header rendered");
  }, []);
  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href={`/about`}>
        <a>About</a>
      </Link>
    </div>
  );
}
