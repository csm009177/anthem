"use client";

import styles from './rootLayout.module.css'
import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  };

  return (
    <button className={styles.headButton} type="button" onClick={handleClick}>HOME</button>
  );
}
