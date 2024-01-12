"use client";

import styles from './rootLayout.module.css'

export default function HomeButton() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <button className={styles.headButton} type="button" onClick={handleClick}>HOME</button>
  );
}
