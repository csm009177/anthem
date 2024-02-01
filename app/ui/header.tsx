"use client";

import Button from "./button/button";
import React, { useState, useEffect } from "react";

export default function Header() {
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
    <div className="flex flex-row justify-center items-center w-screen h-1/6 bg-green-950 text-white text-xl">
      <div className="ml-0">
        <Button url="/" title={title} />
      </div>
    </div>
  );
}
