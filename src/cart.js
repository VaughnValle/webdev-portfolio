import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import { pics } from "./Gallery.js";
import { CartItem } from "./cart-item";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {pics.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else {return null}
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button
            onClick={() => {
              checkout();
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
