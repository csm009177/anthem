"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/ui/button/backButton";

export default function JavaScript() {
  const token = localStorage.getItem("token");
  const tokenOne = localStorage.getItem("tokenOne");
  const tokenTwo = localStorage.getItem("tokenTwo");
  const tokenThree = localStorage.getItem("tokenThree");
  const router = useRouter();

  if (!token) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 매국노야");
  }
  if (!tokenOne) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 얌생이야");
  }
  if (!tokenTwo) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 얌생2야");
  }
  if (!tokenThree) {
    router.back();
    alert("꼼수 부리지 마라. 더러운 얌생2야");
  }

  return (
    <div className="flex flex-col justify-center items-center h-lvh  bg-green-900 text-white p-auto">
      <div>SHOWING REACT USAGE</div>
      <br />
      <BackButton />
    </div>
  );
}
