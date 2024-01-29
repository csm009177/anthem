'use client'

import Button from './button/button';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  // URL에 따라 title 설정
  const getTitleFromUrl = (url) => {
    switch (url) {
      case '/':
        return 'Enter the first verse of the Republic of Korean anthem';
      case '/korean':
        return 'korean page';
      case '/info' :
        return 'Personnel Information'
      default : 
        'default'
    }
  };

  // Button 컴포넌트에 전달할 URL
  const url = '/'+window.location.href.split("/")[window.location.href.split("/").length-1] // 예시로 '/'를 사용하였습니다. 실제로는 동적으로 변경되어야 합니다.
  
  // URL에 따른 title 설정
  const title = getTitleFromUrl(url);

  return (
    <div className='flex flex-row justify-center items-center w-screen h-1/6 bg-green-950 text-white text-xl'>
      <div className='ml-0'>
        <Button url={url} title={title} />
      </div>
    </div>
  );
}
