"use client";
import styles from './home.module.css'

export default function Joinbutton() {
  const handleClick = () => {
    window.location.href = "/join";
  };

  return (
    <button className={styles.headButton} type="button" onClick={handleClick}>Join</button>
  );
}
