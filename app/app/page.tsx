'use client'
import Image from "next/image";

export default function Home() {

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 리로딩 방지

    const inputValue = event.target.anthem.value;

    if (inputValue === "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세") {
      alert("ok");
    } else {
      alert("올바른 애국가를 입력하세요");
    }
  };
  
  return (
    <div className="h-screen w-screen flex justify-center">
      <form onSubmit={handleSubmit} className="flex justify-center items-center">
        <input type="text" name="anthem" className="w-70 h-10" placeholder="국가 애창가를 입력하세요"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}