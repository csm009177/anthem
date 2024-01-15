"use client";
import styles from './home.module.css'
import { useRouter } from 'next/navigation';

export default function Joinbutton() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/join')
  };

  return (
    <button className={styles.headButton} type="button" onClick={handleClick}>Join</button>
  );
}
