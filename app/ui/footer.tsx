'use client'


import React, { useState, useEffect } from "react";


export default function Foot() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    const handleTitleChange = () => {
      const routes = {
        "/": "Enter the first verse of the Republic of Korean anthem",
        "/korean": "There is bodyStateData and script",
        "/info": "Personnel Information",
        "/inner": "Complete the components for the next page",
        "/html": "Html Useage",
        "/stack": "stack",
        "/javascript": "Javascript Useage",
        "/stackOne": "stackOne",
        "/react": "React Useage",
        "/stackTwo": "stackTwo",
        "/next": "Next Useage",
      };
      const currentUrl = window.location.pathname;
      setTitle(routes[currentUrl] || "");
    };

    handleTitleChange();

    window.addEventListener("hashchange", handleTitleChange);

    return () => {
      window.removeEventListener("hashchange", handleTitleChange);
    };
  }, []);

  return (
    <div className='flex justify-center items-center flex-col w-screen h-10 overflow-hidden bg-green-950 text-white text-xs'>
      {title}
    </div>
  );
}
