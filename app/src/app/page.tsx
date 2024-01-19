// app/src/app/page.tsx
'use client'
import Image from "next/image";
import { useState } from "react";

export default function Foot() {
  const [nationalAnthem, setNationalAnthem] = useState("");  // 상태를 사용하여 애국가를 저장합니다.

  const checkNationalAnthem = () => {
    const correctNationalAnthem = "동해물과 백두산이 마르고 닳도록 하느님이 보우하사...";
    
    if (nationalAnthem === correctNationalAnthem) {
      alert("당신은 애국자입니다");
    } else {
      alert("애국가를 올바르게 입력해주세요");
    }
  };

  return (
    <div className="flex flex-col">
      {"애국가를 입력하세요"}
      <input
        className="w-screen"
        type="text"
        placeholder="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세"
        value={nationalAnthem}
        onChange={(e) => setNationalAnthem(e.target.value)}
      />
      <button onClick={checkNationalAnthem}>확인</button>
    </div>
  );
}
