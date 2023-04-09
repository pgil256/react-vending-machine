import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import '../style/Takis.css';

const Takis = () => {
  return (
    <div>
      <img className="Takis"
        src = 'https://media.giphy.com/media/Vq7M0uMk9QSeqrWH6p/giphy-downsized-large.gif'
        alt="Bag of chips."
      />
      <div className="link-block">
        <h3>These are some good Takis!</h3>
        <h4>How many would you like?</h4>
        <Counter />
        <Link to="/">Back to machine</Link>
      </div>
    </div>
  );
}

export default Takis;