import React from "react";
import "./CartWidget.css";
const cartIcon = <img src="../../../src/assets/cart.png" alt="" />

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">{cartIcon}</span>
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;
