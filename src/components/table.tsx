import { getNeo } from "@/lib/Nasa";
import styles from "@/styles/Table.module.css";
import Image from "next/image";
import logo from "@/../../public/assets/logo.png";

export default async function Table() {
  const list = await getNeo();

  const renderData = (object: any) => {
    const allData: any[] = [];
    for (const key in object) {
      object[key].forEach((obj: any) => {
        allData.push({
          name: obj.name,
          key,
          magnitude: obj.absolute_magnitude_h,
          danger: obj.is_potentially_hazardous_asteroid,
        });
      });
    }
    return (
      <div className={styles.body}>
        <Image src={logo} alt="logo" className={styles.logo} priority />
        <div className={styles.table}>
          <div className={styles.column}>
            <div className={styles.header}>Name</div>

            {allData.map((item) => (
              <li key={item.name} className={styles.itemList}>
                {item.name}
              </li>
            ))}
          </div>

          <div className={styles.column}>
            <div className={styles.header}>Date</div>

            {allData.map((item) => (
              <li key={item.name} className={styles.itemList}>
                {new Date(item.key).toLocaleDateString("es-ES", {
                  timeZone: "UTC",
                })}
              </li>
            ))}
          </div>

          <div className={styles.column}>
            <div className={styles.header}>Magnitude</div>

            {allData.map((item) => (
              <li key={item.name} className={styles.itemList}>
                {item.magnitude}
              </li>
            ))}
          </div>

          <div className={styles.column}>
            <div className={styles.header}>Danger</div>

            {allData.map((item) => (
              <li key={item.name} className={styles.itemList}>
                {item.danger ? "Yes" : "No"}
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return renderData(list);
}
