import "./checkout.css"
import { useContext } from "react";

import CartContext from "../context/Cart/CartContext";
import CheckoutItem from "../components/Checkout/CheckoutItem";
import Paypal from "../components/Paypal/Paypal";


const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext)
  console.log(cartItems)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} stock={cartItem.stock} />
      ))}
      <span className="total">Total: ${cartTotal}</span>

      {cartItems ? <Paypal /> : null}

    </div>
  );
};

export default Checkout;