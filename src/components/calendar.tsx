"use client";
import styles from "@/styles/Calendar.module.css";
import { useState } from "react";

export default function Calendar() {
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const handleStartChange = (event: any) => {
    setStart(new Date(event.target.value));
    console.log(start);
  };
  const handleEndChange = (event: any) => {
    setEnd(new Date(event.target.value));
    console.log(end);
  };
  return (
    <div className={styles.body}>
      <input type="date" onChange={handleStartChange}></input>
      <input type="date" onChange={handleEndChange}></input>
    </div>
  );
}
