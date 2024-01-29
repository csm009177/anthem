"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../ui/button/button";

export default function Html() {
  const Token = localStorage.getItem("Token");
  const infoToken = localStorage.getItem("infoToken");
  const router = useRouter();

  if (!Token) {
    router.push("/");
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }

  if(!infoToken) {
    router.push("/");
    alert("꼼수 부리지 마라. 얌생아");
  }


  return (
    <div className="flex flex-col justify-center items-center h-lvh  bg-green-900 text-white p-auto">
      <div>SHOWING HTML USAGE 
      </div>
    </div>
  );
}
