import Image from "next/image";
import styles from "./page.module.css";
import { getNeo } from "@/lib/Nasa";
import Stars from "@/components/stars";
import Table from "@/components/table";

export default async function Home() {
  return (
    <div className={styles.body}>
      <Table />
    </div>
  );
}
