import React from 'react';

type IFilterProps = {
  checkedList: number[];
  setCheckedList: (e: number[]) => void;
};

const TransferFilter = ({ checkedList, setCheckedList }: IFilterProps) => {
  const handelCheked = (e: number) => {
    if (checkedList.includes(e)) {
      setCheckedList(checkedList.filter((item: number) => item !== e));
    } else {
      // @ts-ignore
      setCheckedList((old) => [...old, e]);
    }
  };
  return (
    <div>
      <div className="w-full flex flex-col gap-2">
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <div className="flex flex-col  w-full">
          <div
            onClick={() => {
              if (checkedList.length === 4) {
                setCheckedList([]);
              } else {
                setCheckedList([0, 1, 2, 3]);
              }
            }}
            className="flex  gap-2 p-2 w-full items-center hover:bg-[#f2fcff]"
          >
            <input
              checked={checkedList.length === 4}
              className="cursor-pointer"
              type="checkbox"
            />
            <p>ВСЕ</p>
          </div>
          <div
            onClick={() => handelCheked(0)}
            className="flex  cursor-pointer gap-2 p-2 w-full items-center hover:bg-[#f2fcff]"
          >
            <input
              className="cursor-pointer"
              checked={checkedList.includes(0)}
              type="checkbox"
            />
            <p>без пересадки</p>
          </div>
          <div
            onClick={() => handelCheked(1)}
            className="flex cursor-pointer  gap-2 p-2 w-full items-center hover:bg-[#f2fcff]"
          >
            <input
              className="cursor-pointer"
              checked={checkedList.includes(1)}
              type="checkbox"
            />
            <p>1 пересадка</p>
          </div>
          <div
            onClick={() => handelCheked(2)}
            className="flex cursor-pointer gap-2 p-2 w-full items-center hover:bg-[#f2fcff]"
          >
            <input
              className="cursor-pointer"
              checked={checkedList.includes(2)}
              type="checkbox"
            />
            <p>2 пересадка</p>
          </div>
          <div
            onClick={() => handelCheked(3)}
            className="flex cursor-pointer  gap-2 p-2 w-full items-center hover:bg-[#f2fcff]"
          >
            <input
              className="cursor-pointer"
              checked={checkedList.includes(3)}
              type="checkbox"
            />
            <p>3 пересадка</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransferFilter;
