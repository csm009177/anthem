"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../ui/button/button";
import Header from "../../ui/header";
import Foot from "../../ui/footer";

export default function Final() {
  const router = useRouter();
  const [answer, setLyrics] = useState("");
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const tokenOne = localStorage.getItem("tokenOne");
  const tokenTwo = localStorage.getItem("tokenTwo");
  const tokenThree = localStorage.getItem("tokenThree");
  const tokenFour = localStorage.getItem("tokenFour");

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
  if (!tokenThree) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 얌생2야");
  }
  if (!tokenFour) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 얌생2야");
  }

  const handlePass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/passFive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      });
      if (response.ok) {
        // 토큰 발행을 위한 서버 응답 기다리기
        const data = await response.json();
        const tokenFive = data.tokenFive;

        // 토큰을 안전하게 저장
        localStorage.setItem("tokenFive", tokenFive);
        router.push("/stackTwo");
        setMessage("정답입니다");
        console.log(`input answer : ${answer}`);
      } else {
        setMessage("틀렸습니다");
        console.log(`input answer : ${answer}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("서버 오류");
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-green-900 text-white p-auto">
      <Header />
      <div className="flex flex-col h-full justify-center items-center">
        <Button url="info" title="Personnel Information" />
        <br/>
        <Button url="html" title="Html Useage" />
        <br/>
        <Button url='javascript' title='Javascript Useage'/>
        <br/>
        <Button url='react' title='React Useage'/>
        <br/>
        <Button url='next' title='Next Useage'/>
      
        {message && <p>{message}</p>}
      </div>
      <Foot />
    </div>
  );
}
