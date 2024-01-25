'use client'


import ReloadButton from './button/reloadButton';


// Customer page를 렌더링하는 파일입니다.


export default function Head() {
  return (
    <div className='flex flex-row justify-center items-center w-screen h-1/6 bg-green-950 text-white text-xl'>
      <div className='ml-0'>
      <ReloadButton/>
      Enter the first verse of the Republic of Korean anthem
      </div>
    </div>
  );
}
