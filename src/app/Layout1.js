import Link from 'next/link';
import styles from '../app/styles/Layout.module.css';
import './globals.css';

export default function Layout1({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}