"use client";
import Link from "next/link";

const TalkButton = () => {
  const redirectToWhatsApp = () => {
    window.open("https://wa.me/923405245826", "_blank");
  };

  return (
    <button
      onClick={redirectToWhatsApp}
      className="app__filled_btn min-w-[10rem]"
    >
      Let&apos;s Talk
    </button>
  );
};

export default TalkButton;
