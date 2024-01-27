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
        
        router.push("/korean");
        console.log(lyrics)
        setMessage("당신은 애국자입니다");
      } else {
        console.log(lyrics)
        setMessage("당신은 매국노입니다");
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
