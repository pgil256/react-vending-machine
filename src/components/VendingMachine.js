import React from 'react';
import { Link } from 'react-router-dom';
import VendingMachineImg from '../images/vending-machine.png';
import '../style/VendingMachine.css';

const VendingMachine = () => {
    return (
        <div className="container">
            <h1>Welcome to my vending machine!</h1>
            <img className="vending-machine" src={VendingMachineImg} alt="Vending machines" />
            <div className="greet-text-block">
                <h3>Hi! What would you like?</h3>
            </div>
            <div className="link-block">
                <h4>Make a choice:</h4>
                    <Link to="/takis">Takis</Link>
                    <Link to="/snickers">Snickers</Link>
                    <Link to="/sprite">Sprite</Link>
            </div>
        </div>
    )
}

export default VendingMachine;