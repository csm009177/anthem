'use client'
 
import { useRouter } from 'next/navigation';

export default function ReloadButton() {
  const router = useRouter();  
  const handleClick = () =>{
    router.push('/');
  }

  return (
    <button type="button" onClick={handleClick}>
      HOME</button>
  )
}