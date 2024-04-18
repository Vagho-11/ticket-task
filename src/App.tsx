import React, { useMemo, useState } from 'react';
import Card from './components/Card';
import Data from './ticket.json';
import CurrencyFilter from './components/CurrencyFilter';
import TransferFilter from './components/TransferFilter';

function App() {
  const [checkedList, setCheckedList] = useState<Array<number>>([]);
  const { tickets } = Data;

  const filteredTickets = useMemo(() => {
    if (!checkedList.length) {
      return tickets;
    } else {
      return tickets.filter((ticket) => checkedList.includes(ticket.stops));
    }
  }, [checkedList]);

  const TickerCards = filteredTickets.map((item) => (
    <Card key={item.price} {...item} />
  ));

  return (
    <div className="h-screen flex p-20  gap-2 justify-between bg-[#f3f7fa]">
      <div className="w-[300px] flex flex-col gap-4 rounded-lg p-4 bg-white">
        <CurrencyFilter />
        <TransferFilter
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />
      </div>
      <div className="gap-2 flex flex-col h-[600px] overflow-y-auto overflow-x-hidden">
        {TickerCards}
      </div>
    </div>
  );
}

export default App;
