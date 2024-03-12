import Image from "next/image";
import styles from "./page.module.css";
import { getNeo } from "@/lib/Nasa";
import Table from "@/components/table";

import Stars from "@/components/stars";

export default function Home() {
  return (
    <div className={styles.body}>
      <Stars />

      <Table />
    </div>
  );
}
