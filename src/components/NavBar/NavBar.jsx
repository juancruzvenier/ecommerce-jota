import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
    return (
        <header className="navbar">
 
            <div className="navbar-logo">
                <a href="#"><img src="../src/assets/jota-negro.svg" alt="JOTA Logo" /></a>
            </div>


            <nav className="navbar-categorias">
                <ul>
                    <li><a href="#">REMERAS</a></li>
                    <li><a href="#">PANTALONES</a></li>
                    <li><a href="#">CAMISAS</a></li>
                    <li><a href="#">ABRIGOS</a></li>
                </ul>
            </nav>


            <div className="navbar-iconos">
                <img src="../src/assets/lupa.png" alt="" />
                <img src="../src/assets/usuario.png" alt="" />
                <CartWidget />

                <span className="navbar-monto-total">$ 0.00</span>
            </div>
        </header>
    );
};

export default NavBar;
