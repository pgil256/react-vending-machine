import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/takis">
                Takis
            </NavLink>
            <NavLink exact to="/sprite">
                Sprite
            </NavLink>
            <NavLink exact to="/snickers">
                Snickers
            </NavLink>
        </nav>
    );
}

export default Navbar;
