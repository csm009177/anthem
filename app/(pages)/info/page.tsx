"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../ui/button/button";
import BackButton from "@/app/ui/button/backButton";

export default function Info() {
  const Token = localStorage.getItem("Token");
  const infoToken = localStorage.getItem("infoToken");
  const router = useRouter();

  if (!Token) {
    router.push("/");
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }

  if(!infoToken) {
    router.push("/");
    alert("꼼수 부리지 마라. 더러운 얌생이야");
  }


  return (
    <div className="flex flex-col justify-center items-center h-lvh  bg-green-900 text-white p-auto">
      <div>
        Personnel information
        <div>CHOI SUNGMIN</div>
        <div> 82+010-9558-1007</div>
        <div>csm009177@gamil.com</div>
      </div>
      <br/>
      <BackButton/>
    </div>
  );
}
