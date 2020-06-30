import React from "react";
import "./Coin.css";

function Coin(props) {
  return (
    <div className="Coin">
      <img className="Coin-image" src={props.src} alt={props.side} />
    </div>
  );
}

export default Coin;