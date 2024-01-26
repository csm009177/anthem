"use client";

// 'use client' statement가 사용되어야 할 것 같지만, 문맥이나 프로젝트 설정에 따라 다를 수 있습니다.
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// 로그인 컴포넌트 정의
export default function Login() {
  // 상태 변수 초기화
  const [lyrics, setLyrics] = useState("");
  const [message, setMessage] = useState("");
  
  // Next.js의 라우터 훅 사용
  const router = useRouter();

  // 로그인 처리 함수
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    // 폼 기본 동작 방지
    e.preventDefault();

    try {
      // 서버로 로그인 요청 전송
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lyrics }),
      });

      // HTTP 응답이 OK인 경우
      if (response.ok) {
        // 로그인 성공 시 /korean 페이지로 이동
        router.push("/korean");
        console.log(lyrics);
        setMessage("당신은 애국자입니다");
      } else {
        // 로그인 실패 시
        console.log(lyrics);
        setMessage("당신은 매국노입니다");
      }
    } catch (error) {
      // 오류 발생 시
      console.error("Error:", error);
      setMessage("서버 오류");
    }
  };

  // 로그인 컴포넌트 JSX 반환
  return (
    <div className="flex flex-col justify-center items-center h-lvh w-screen h-1/6 bg-green-900 text-white" >
      
      <form
        className="h-32 flex flex-col items-end justify-around"
        onSubmit={handleLogin}
      >
        {/* 입력 필드 */}
        <input
          className="border border-black"
          type="text"
          value={lyrics}
          placeholder="type first verse"
          onChange={(e) => setLyrics(e.target.value)}
        />
        {/* 로그인 버튼 */}
        <button className="border border-black" type="submit">
          검사
        </button>
      </form>
      {/* 결과 메시지 표시 */}
      {message && <p>{message}</p>}
    </div>
  );
}
