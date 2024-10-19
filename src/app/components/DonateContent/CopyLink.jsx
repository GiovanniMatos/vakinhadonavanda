"use client";
import { useState } from 'react';
// import copy from 'clipboard';
// import { FaFacebookSquare } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";

export default function CopyLink({PixCode, defaultValue}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    if (!navigator.clipboard) {
      // Handle fallback for older browsers
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy text:',   
      err);
      });
  };

  const handleClick = () => {
    const textToCopy = PixCode; 
    handleCopy(textToCopy);
    setCopied(true); 
  };

  return (
    <>
      <input
        className="w-[30rem] md:w-[30rem] lg:w-[30rem] pt-2 pb-2 pl-4 border-zinc-300 border-[0.5px] rounded-[4px] mt-3"
        type="text"
        defaultValue={defaultValue}
        readOnly
      />
      <button onClick={handleClick} className="font-bold text-white bg-green-500 pl-4 pr-4 pt-1 pb-1 rounded-md mt-1">
        {copied ? 'Copiado!' : 'Copiar código'}
      </button>
    </>
  );
};