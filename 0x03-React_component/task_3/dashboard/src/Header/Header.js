import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="App-header">
                <img src={logo} alt="Holberton-logo" />
                <h1>School dashboard</h1>
            </div>
        </header>
        
    );
}

export default Header;