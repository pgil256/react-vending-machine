import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import '../style/Snickers.css';

const Snickers = () => {
  return (
    <div>
      <img className="Snickers"
        src = 'https://media.giphy.com/media/106EGwK7KpwbCg/giphy.gif'
        alt="Snickers bar."
      />
      <div className="link-block">
        <h3>Snickers bar!</h3>
        <h4>How many would you like?</h4>
        <Counter />
        <Link to="/">Back to machine</Link>
      </div>
    </div>
  );
}

export default Snickers;