import { useState } from "react";

const NumberSelector = ({message, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  

  return (
    <div className="flex flex-col items-end">
      <p className="text-green-500 font-bold text-4 m-3">{message}</p>
      <div className="font-bold flex gap-[24px]">
        {arrNumber.map((value, i) => (
          <div
            key={i}
            onClick={() => setSelectedNumber(value)}
            className={`border-[1px] border-solid border-black h-[72px] w-[72px] grid place-content-center cursor-pointer ${
              value === selectedNumber
                ? "bg-black text-white"
                : "bg-white text-black"
            } }`}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-[24px] font-bold">Select Number</p>
    </div>
  );
};

export default NumberSelector;
