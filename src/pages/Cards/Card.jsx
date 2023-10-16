import React, { useEffect, useState } from 'react';
// import './Cards.css'

const Cards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    function rotateCards() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (index === activeCardIndex) {
          card.style.transform = 'translate(-50%, -120vh) rotate(-48deg)';
        } else {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle = angle - 10;
        }
      });
    }

    rotateCards();

    window.addEventListener('scroll', () => {
      const stackArea = document.querySelector('.stack-area');
      const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;

      if (proportion <= 0) {
        const n = cards.length;
        const index = Math.ceil((proportion * n) / 2);
        const newIndex = Math.abs(index) - 1;

        if (newIndex !== activeCardIndex) {
          setActiveCardIndex(newIndex);
          rotateCards();
        }
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, [activeCardIndex]);

  return (
    <div className="center">
      <div className="top bg-gray-200 h-screen flex items-center justify-center text-4xl">
        Scroll Down
      </div>
      <div className="stack-area flex">
        <div className="left flex-1 p-10">
          <div className="title text-6xl font-bold">
            Our Features
          </div>
          <div className="sub-title text-sm mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            qui quis, facere, cupiditate, doloremque natus ex perspiciatis
            ratione hic corrupti adipisci ea doloribus!
            <br />
            <button className="text-white bg-black p-4 rounded-md mt-5">
              See More Details
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <div className="cards flex h-screen">
            <div className="card bg-blue-500 text-white">
              <div className="sub">Simplified</div>
              <div className="content">Complex tasks are now simple</div>
            </div>
            <div className="card bg-red-500 text-white">
              <div className="sub">Boost Productivity</div>
              <div className="content">Perform Tasks in less time</div>
            </div>
            <div className="card bg-purple-500 text-white">
              <div className="sub">Facilitated learning</div>
              <div className="content">Train anyone from anywhere</div>
            </div>
            <div className="card bg-pink-500 text-white">
              <div className="sub">Support</div>
              <div className="content">Now it's 24/7 support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom bg-gray-200 h-screen flex items-center justify-center text-4xl">
        Other Content...
      </div>
    </div>
  );
};

export default Cards;
