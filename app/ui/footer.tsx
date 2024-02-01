'use client'

import { useState } from "react";


export default function Foot() {
  const [title, setTitle] = useState("");

  return (
    <div className='flex justify-center items-center flex-col w-screen h-10 overflow-hidden bg-green-950 text-white text-xs'>
      foot
    </div>
  );
}
