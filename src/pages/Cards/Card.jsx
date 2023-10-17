import React, { useEffect, useState } from 'react';
import './Cards.css'

const Cards = () => {
 

  return (
    <div class="container">
    <ul id="cards">
        <li class="card" id="card1">
            <div class="card-body">
                <h2>Card 1</h2>
            </div>
        </li>
        <li class="card" id="card2">
            <div class="card-body">
                <h2>Card 2</h2>
            </div>
        </li>
        <li class="card" id="card3">
            <div class="card-body">
                <h2>Card 3</h2>
            </div>
        </li>
        <li class="card" id="card4">
            <div class="card-body">
                <h2>Card 4</h2>
            </div>
        </li>
    </ul>
</div>
  );
};

export default Cards;
