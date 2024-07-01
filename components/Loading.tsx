import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="flex mb-6 items-center">
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="FinMate logo"
          className="size-14"
        />
        <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 ml-3">
          FinMate
        </h1>
      </div>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
