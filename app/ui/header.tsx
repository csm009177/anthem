'use client'

import Button from './button/button';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";


export default function Header() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    // 페이지가 변경될 때마다 현재 URL을 기반으로 title을 변경
    const handleTitleChange = () => {
      const currentUrl = window.location.href;
      if (currentUrl === "http://localhost:3000/"){
        setTitle("Enter the first verse of the Republic of Korean anthem")
      }
      if (currentUrl === "http://localhost:3000/korean") {
        setTitle("There is bodyStateData and script");
      }
      if (currentUrl === "http://localhost:3000/info") {
        setTitle("Personnel Information");
      }
        
    };

    handleTitleChange();

    // 페이지 변경 이벤트 리스너 등록
    window.addEventListener("hashchange", handleTitleChange);

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      window.removeEventListener("hashchange", handleTitleChange);
    };
  }, []);

  return (
    <div className='flex flex-row justify-center items-center w-screen h-1/6 bg-green-950 text-white text-xl'>
      <div className='ml-0'>
      <Button url='/' title={title}/>
      </div>
    </div>
  );
}
