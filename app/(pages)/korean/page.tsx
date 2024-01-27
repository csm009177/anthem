'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function Korean() {
  const Token = localStorage.getItem("Token");
  const router = useRouter();
  
  if (!Token) {
    router.push("/");
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }

  return (
    <div className='flex justify-center items-center flex-col w-screen h-screen bg-green-900 text-white p-auto'>
      Koean
    </div>
  );
}
