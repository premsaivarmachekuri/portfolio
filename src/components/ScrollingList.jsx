import React, { useState, useEffect } from 'react';

const ScrollingList = () => {
  const [items, setItems] = useState(['This', 'Is', 'Awesome', '!!!']);
  const [stop, setStop] = useState(false);

  const interval = 2000; // time between items' change

  useEffect(() => {
    const timer = setInterval(change, interval);
    return () => clearInterval(timer);
  }, []);

  const change = () => {
    if (stop) return;
    const itemToMove = items.shift();
    setItems((prevItems) => [...prevItems, itemToMove]);
  };

  return (
    <ul className="w-300 h-500 overflow-hidden border-2 border-red-500 m-auto">
      {items.map((item, index) => (
        <li
          key={index}
          className="transition-transform transition-opacity duration-500 ease-in-out block m-4 h-492 text-center line-500 text-black bg-red-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ScrollingList;
