"use client";

export default function ReloadButton() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
      <button type="button" onClick={handleClick}
        className="flex  bg-green-900 text-white">reload</button>
  );
}