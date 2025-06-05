'use client';

import { useState } from 'react';
import styles from '../app/styles/Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      {count > 5 && <p>Count is greater than 5!</p>}
    </div>
  );
}