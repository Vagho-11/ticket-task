import React, { useState } from 'react';

const CurrencyFilter = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="w-full flex flex-col gap-2">
      <p>ВАЛЮТА</p>
      <div className="flex  w-full">
        <div
          onClick={() => setIsActive(1)}
          className={`${isActive === 1 && '!bg-[#2296f3] !text-white'} py-4 hover:bg-[#f2fcff] text-[#62b6f6] cursor-pointer px-6 rounded-l-lg border`}
        >
          RUB
        </div>
        <div
          onClick={() => setIsActive(2)}
          className={`${isActive === 2 && '!bg-[#2296f3] !text-white'} py-4 hover:bg-[#f2fcff] text-[#62b6f6] cursor-pointer px-6 border`}
        >
          USD
        </div>
        <div
          onClick={() => setIsActive(3)}
          className={`${isActive === 3 && '!bg-[#2296f3] !text-white'} py-4 hover:bg-[#f2fcff] text-[#62b6f6] cursor-pointer px-6 rounded-r-lg border`}
        >
          EUR
        </div>
      </div>
    </div>
  );
};
export default CurrencyFilter;
