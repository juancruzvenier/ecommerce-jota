import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <Link to="/"><img src="../src/assets/jota-negro.svg" alt="JOTA Logo" /></Link>
            </div>
            <nav className="navbar-categorias">
                <ul>
                    <li><Link to="/category/remeras">REMERAS</Link></li>
                    <li><Link to="/category/pantalones">PANTALONES</Link></li>
                    <li><Link to="/category/camisas">CAMISAS</Link></li>
                    <li><Link to="/category/abrigos">ABRIGOS</Link></li>
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
