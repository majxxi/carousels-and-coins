import React, { useState } from "react";
import Coin from "./Coin";
import "./Flipper.css";

function random(coins){
  const randomIdx = Math.floor(Math.random() * 2);
  return coins[randomIdx];

}

function Flipper(props) {
  const [coin, setCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  function handleClick() {
    const randomCoin = random(props.coins);
    setCoin(randomCoin);
    if(randomCoin.side === "head") {
      setHeadCount(headCount + 1);
    } else {
      setTailCount(tailCount + 1);
    };
  }

  const showCoin = coin ? <Coin src={coin.src} alt={coin.side} /> : null;
  return (
    <div>
      {showCoin}
      <button data-testid="button" className="flipButton" onClick={handleClick}>FLIP</button>
      <p>Out of {headCount + tailCount} flips, there have been {headCount} heads and {tailCount} tails.</p>
    </div>
  );
}

Flipper.defaultProps = {
  coins: [
    {
      src: "https://s3.amazonaws.com/ngccoin-production/us-coin-explorer-category/3319441-007o.jpg",
      side: "head"
    },
    {
      src: "https://s3.amazonaws.com/ngccoin-production/us-coin-explorer-category/3319441-007r.jpg",
      side: "tail"
    }
  ]
}

export default Flipper;