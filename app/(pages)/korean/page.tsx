'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Button from '../../ui/button/button';
import Header from '../../ui/header';
import Foot from '../../ui/footer';

export default function Korean() {
  const token = localStorage.getItem("token");
  const [answer, setLyrics] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  
  // token 있는지 검사하기
  if (!token) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }

  const handlePass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/passOne", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      });
      if (response.ok) {
        // 토큰 발행을 위한 서버 응답 기다리기
        const data = await response.json();
        const tokenOne = data.tokenOne;
  
        // 토큰을 안전하게 저장
        localStorage.setItem("tokenOne", tokenOne);
        router.push("/inner");
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
    <div className="flex flex-col h-screen w-screen bg-green-900 text-white p-auto">
      <Header/>
      <div>
        <Button url='info' title='Personnel Information'/>
      </div>
      <div className='flex flex-col h-full justify-center items-center'>
      <form
        className=" flex justify-around"
        onSubmit={handlePass}
      >{`<Script>`}
        <input
          className="border border-black text-black"
          type="text"
          value={answer}
          placeholder="type first verse"
          onChange={(e) => setLyrics(e.target.value)}
        />
        {`<Script/>`}
        <button className="border border-black" type="submit">
          검사
        </button>
      </form>
      {message && <p>{message}</p>}
      </div>
      <Foot/>
    </div>
  );
}
