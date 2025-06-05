'use client';

import { useState, useEffect } from 'react';
import styles from "../app/styles/ThemSwitcher.module.css";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={`${styles.themeSwitcher} ${darkMode ? styles.dark : styles.light}`}>
      <h2 className={styles.title}>Theme Switcher</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p className={styles.description}>
        Current theme: {darkMode ? 'Dark' : 'Light'}
      </p>
    </div>
  );
}