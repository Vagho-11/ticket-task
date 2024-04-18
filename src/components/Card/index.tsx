import React from 'react';
import { ReactComponent as TurkAirlines } from '../img/turk-airlines.svg';

interface ICardProps {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

const Card = ({
  origin,
  origin_name,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  destination,
  stops,
  price,
}: ICardProps) => {
  return (
    <div className="rounded-lg flex bg-white ">
      <div className="flex flex-col justify-center items-center border-r  p-4 gap-2">
        <TurkAirlines className="w-[200px] h-[60px]" />
        <button className="px-6 hover:bg-[#f7802a] w-[220px] py-2 text-white border-none outline-none rounded-md bg-[#f56c27]">
          Купить за {price}
        </button>
      </div>
      <div className="p-4 w-full flex flex-col">
        <div className="flex justify-between">
          <p className="text-[48px]">{arrival_time}</p>
          <div className="flex flex-col gap-2 w-[400px] items-center font-semibold text-[#abb2b4]">
            <p>{stops} ПЕРЕСАДКА</p>
            <div className="w-full border"></div>
          </div>
          <p className="text-[48px]">{departure_time}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p>
              {origin} {origin_name}
            </p>
            <p className="text-[#abb2b4]">{arrival_date}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>
              {destination} {destination_name}
            </p>
            <p className="text-[#abb2b4]">{departure_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
