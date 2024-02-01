"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/ui/button/backButton";
import Header from "../../ui/header";
import Foot from "../../ui/footer";

export default function Info() {
  const token = localStorage.getItem("token");
  const router = useRouter();

  if (!token) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center  bg-green-900 text-white p-auto">
      <Header />
      <div className="flex flex-col h-lvh justify-center items-center">
        Personnel information
        <div>CHOI SUNGMIN</div>
        <div> 82+010-9558-1007</div>
        <div>csm009177@gamil.com</div>
        <br />
        <BackButton />
      </div>
      <Foot />
    </div>
  );
}
