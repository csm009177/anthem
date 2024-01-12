"use client";

export default function HomeButton() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <button className="text-2xl" type="button" onClick={handleClick}>HOME</button>
  );
}
