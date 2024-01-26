'use client'


import Button from './button/button';
import ReloadButton from './button/reloadButton';

export default function Header() {
  return (
    <div className='flex flex-row justify-center items-center w-screen h-1/6 bg-green-950 text-white text-xl'>
      <div className='ml-0'>
      <ReloadButton/>
      <Button getUrl='test'/>
      Enter the first verse of the Republic of Korean anthem
      </div>
    </div>
  );
}
