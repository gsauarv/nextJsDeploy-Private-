import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>This is the home page</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
