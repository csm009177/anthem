"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [lyrics, setLyrics] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lyrics }),
      });
      if (response.ok) {
        // 토큰 발행을 위한 서버 응답 기다리기
        const data = await response.json();
        const token = data.token;
  
        // 토큰을 안전하게 저장
        localStorage.setItem("Token", token);
        router.push("/korean");
        setMessage("당신은 애국자입니다");
        console.log(`input lyrics : ${lyrics}` )
      } else {
        setMessage("당신은 매국노입니다");
        console.log(`input lyrics : ${lyrics}` )
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("서버 오류");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-lvh  bg-green-900 text-white p-auto">
      <form
        className="h-32 flex flex-col items-end justify-around"
        onSubmit={handleLogin}
      >
        <input
          className="border border-black text-black"
          type="text"
          value={lyrics}
          placeholder="type first verse"
          onChange={(e) => setLyrics(e.target.value)}
        />
        <button className="border border-black" type="submit">
          검사
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
