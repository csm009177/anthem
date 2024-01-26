"use client";

// 'use client' statement가 사용되어야 할 것 같지만, 문맥이나 프로젝트 설정에 따라 다를 수 있습니다.
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// 로그인 컴포넌트 정의
export default function Login() {
  // 애국가 문장 정의
  const anthemText =
    "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세";

  // 상태 변수 초기화
  const [lyrics, setLyrics] = useState(Array(anthemText.length).fill(""));
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
        body: JSON.stringify({ lyrics: lyrics.join("") }),
      });

      // HTTP 응답이 OK인 경우
      if (response.ok) {
        // 로그인 성공 시 /korean 페이지로 이동
        router.push("/korean");
        setMessage("당신은 애국자입니다");
      } else {
        // 로그인 실패 시
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
    <div className="flex flex-col justify-center items-center h-lvh bg-green-900">
      <form
        className="h-32 flex flex-row flex-wrap items-end justify-around p-40"
        onSubmit={handleLogin}
      >
        {/* 각 글자에 대한 입력 필드 생성 */}
        {anthemText.split("").map((char, index) => (
          <input
            key={index}
            className="w-fit border border-black"
            type="text"
            value={lyrics[index]}
            placeholder={`_`}
            onChange={(e) => {
              const updatedLyrics = [...lyrics];
              updatedLyrics[index] = e.target.value;
              setLyrics(updatedLyrics);
            }}
          />
        ))}
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
