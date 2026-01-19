import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
  } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      
      {Object.keys(cartItems).map((productId) => {
        const product = all_product.find(
          (p) => p._id === productId
        );

        if (!product) return null;

        return (
          <div key={productId}>
            <div className="cartitems-format cartitems-format-main">
            
              <img
                src={product.image}
                alt={product.name}
                className="carticon-product-icon"
              />

              <p>{product.name}</p>
              <p>D{product.new_price}</p>

              <button className="cartitems-quantity">
                {cartItems[productId]}
              </button>

              <p>D{product.new_price * cartItems[productId]}</p>

              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => removeFromCart(productId)}
                alt="remove"
              />
            </div>
            <hr />
          </div>
        );
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>D{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Total</p>
              <p>D{getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

