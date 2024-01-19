// app/src/app/page.tsx
'use client'
import { useState } from "react";

export default function Foot() {
  const [nationalAnthem, setNationalAnthem] = useState("");

  const checkNationalAnthem = async () => {
    try {
      const response = await fetch('/checkNationalAnthem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ anthem: nationalAnthem }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("애국가를 다시 확인해주세요.");
      }
    } catch (error) {
      console.error("Error checking national anthem:", error);
      alert("애국가 확인 중 오류가 발생했습니다.");
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