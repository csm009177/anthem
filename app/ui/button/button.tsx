'use client'

import { useRouter } from "next/navigation";

export default function Button({ getUrl }: { getUrl: string }) {
  const router = useRouter();

  const useCustomButton = () => {
    // 클릭 시 해당 URL로 페이지 이동
    router.push(`/${getUrl}`);
  };

  return (
    <button onClick={useCustomButton}>{getUrl}</button>
  );
}