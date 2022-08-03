import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const GameBoard = (props) => {

  const cards = ["zero", "one", "two", "three", "four", "five", "six", "seven",
                "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
                "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
                "twentyone"
  ];

  const [current, setCurrent] = useState([]);

  const [used, setUsed] = useState([]);

  const [unused, setUnused] = useState([...cards]);

  const selectCard = (card) => {
    setUsed(used.concat(card));
    var unUsedIndex = unused.indexOf(card);
    var tempUn = [...unused];
    tempUn.splice(unUsedIndex, 1); 
    setUnused(tempUn);
    shuffle();
  };

  const makeCard = (card) => {
    return (
      <div key={uniqid()} className="card-container"> 
        <div id={card} onClick={() => {checkCard(card)}} className="card"></div>
      </div>
    );
  };

  const checkCard = (card) => {
    if (used.includes(card)) {
      props.gameProps.gameHi();
      props.gameProps.gameReset();
      initialize();
    } else {
      props.gameProps.gameScore();
      selectCard(card);
    }
  }


  const initialize = () => {
    setCurrent([]);
    setUsed([]);
    setUnused([...cards]);
    shuffle();
  }

  const initCurrent = () => {
    setCurrent([]);
  }

  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const shuffle = () => {
    initCurrent();
    let i = 0;
    let temp = [...unused];
    let tempCurrent = [];
    let x = randomInt(temp.length);
    // populating with an element of unused first to ensure at least one unused card
    tempCurrent.push(temp[x]);
    temp.splice(x, 1);
    temp = [...temp, ...used];
    while (i < 11) {
      x = randomInt(temp.length);
      tempCurrent.push(temp[x]);
      temp.splice(x, 1);
      i += 1;
    }
    setCurrent(tempCurrent);
  }

  useEffect(() => {
    shuffle();
  }, []);

  return (
    
    <div className="card-area">
      {current.map((card) => {
        return makeCard(card);
      })}
    </div>  
  );
};

export default GameBoard; 