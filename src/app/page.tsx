import Image from "next/image";
import styles from "./page.module.css";
import { getNeo } from "@/lib/Nasa";
import Table from "@/components/table";
import logo from "@/../../public/assets/logo.png";

export default function Home() {
  return (
    <div className={styles.body}>
      <Image src={logo} alt="logo" className={styles.logo} priority />
      <Table />
    </div>
  );
}
