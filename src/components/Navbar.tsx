import Link from "next/link";
import styles from "./Navbar.module.scss";

export default async function Navbar() {
  const res = await fetch("http://localhost:3000/api/category");
  const categories: { name: string; path: string }[] = await res.json();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav_ul}>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={`/${category.path}`}>
              <span>{category.name} (2)</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
