'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Button from '../../ui/button/button';

export default function Korean() {
  const Token = localStorage.getItem("Token");
  const router = useRouter();
  
  if (!Token) {
    router.push("/");
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }

  return (
    <div className="flex flex-col h-lvh  bg-green-900 text-white p-auto">
      <div>
        <Button url='info' title='Personnel Information'/>
      </div>
      <div className='flex flex-col h-full justify-center items-center'>
        test
      </div>
    </div>
  );
}
