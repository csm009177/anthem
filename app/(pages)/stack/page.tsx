'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Button from '../../ui/button/button';

export default function Stack() {
  const token = localStorage.getItem("token");
  const tokenOne = localStorage.getItem("tokenOne");
  const tokenTwo = localStorage.getItem("tokenTwo");
  const [answer, setLyrics] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  
  if (!token) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }
  if (!tokenOne) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 얌생이야");
  }
  if (!tokenTwo) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 얌생2야");
  }

  const handlePass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/passThree", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      });
      if (response.ok) {
        // 토큰 발행을 위한 서버 응답 기다리기
        const data = await response.json();
        const tokenThree = data.tokenThree;
  
        // 토큰을 안전하게 저장
        localStorage.setItem("tokenThree", tokenThree);
        router.push("/other");
        setMessage("정답입니다");
        console.log(`input answer : ${answer}` )
      } else {
        setMessage("틀렸습니다");
        console.log(`input answer : ${answer}` )
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("서버 오류");
    }
  };

  return (
    <div className="flex flex-col h-lvh  bg-green-900 text-white p-auto">
      <div>
        <Button url='javascript' title='Javascript Useage'/>
      </div>
      <div className='flex flex-col h-full justify-center items-center'>
      <form
        className="h-32 flex items-end justify-around"
        onSubmit={handlePass}
      >
        <input
          className="border border-black text-black"
          type="text"
          value={answer}
          placeholder="type first verse"
          onChange={(e) => setLyrics(e.target.value)}
        />
        <button className="border border-black" type="submit">
          검사
        </button>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}
