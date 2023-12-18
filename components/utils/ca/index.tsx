"use client"

import { FaCopy } from "react-icons/fa";
import { caCode } from "../constants";

export default function ContractCopy(){
    const textToCopy = caCode;
    function handleCopyClick() {
      navigator.clipboard.writeText(textToCopy);
    }

    return (
      <div onClick={handleCopyClick} className="relative inline-block font-medium text-white rounded-full cursor-pointer btn-sm group">
        <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-quaternary to-secondary"></span>
        <span className="absolute inset-0 w-full h-full rounded-full opacity-50 bg-gradient-to-br filter group-active:opacity-0 from-quaternary to-quaternary"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-quaternary to-secondary"></span>
        <span className="animate-pulse absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 blur-[6px] from-quaternary to-secondary"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-quaternary from-secondary"></span>
        <span  className=" relative grid items-center grid-flow-col-dense text-white w-fit justify-items-center text-[12px] sm:text-base">
          {textToCopy}
          <FaCopy className="w-3 h-3 ml-3 sm:w-4 sm:h-4" />
        </span>
      </div>
    )
}