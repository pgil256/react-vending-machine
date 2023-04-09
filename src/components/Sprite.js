import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import '../style/Sprite.css';

const Sprite = () => {
  return (
    <div>
      <img className="Sprite"
        src = 'https://media.giphy.com/media/3o7bufVYeWXQwlSsyQ/giphy.gif'
        alt="Can of Sprite."
      />
      <div className="link-block">
        <h3>Enjoy some Sprite!</h3>
        <h4>How many would you like?</h4>
        <Counter />
        <Link to="/">Back to machine</Link>
      </div>
    </div>
  );
}

export default Sprite;