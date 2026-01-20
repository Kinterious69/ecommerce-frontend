
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";

export const ShopContext = createContext(null);


const getDefaultCart = () => ({});

const ShopContextProvider = (props) => {
  const [all_product, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
 

  
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("auth-token")
  );
  

  //  AUTH TOKEN SYNC  
  useEffect(() => {
    
    const handleStorageChange = () => {
      setAuthToken(localStorage.getItem("auth-token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  //  FETCH PRODUCTS & CART 
  useEffect(() => {
    
    // Fetch products
    fetch(`${BASE_URL}/api/products/allproducts`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Product fetch error:", err));

    if (!authToken) {
      setCartItems({});
      return;
    }

    // Fetch cart
    fetch(`${BASE_URL}/api/users/getcart`, {
      method: "POST",
      headers: {
        "auth-token": authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        const newCart = {};
        const cartArray = Array.isArray(data.cart) ? data.cart : data;

        cartArray.forEach((item) => {
          newCart[item.productId] = item.quantity;
        });

        setCartItems(newCart);
      })
      .catch((err) => console.error("Cart fetch error:", err));
  }, [authToken]);

  /*  CART SYNC  */
  const syncCartWithServer = (productId, quantity) => {
    if (!authToken) return;

    const endpoint =
      quantity > 0
        ? `${BASE_URL}/api/users/addtocart`
        : `${BASE_URL}/api/users/removefromcart`;

    fetch(endpoint, {
      method: "POST",
      headers: {
        "auth-token": authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        quantity: Math.abs(quantity),
      }),
    }).catch((err) => console.error("Cart sync error:", err));
  };

  // ADD TO CART  
  const addToCart = (productId) => {
    setCartItems((prev) => {
      syncCartWithServer(productId, 1);
      return {
        ...prev,
        [productId]: (prev[productId] || 0) + 1,
      };
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedQty = (prev[productId] || 0) - 1;

      syncCartWithServer(productId, -1);

      if (updatedQty > 0) {
        return { ...prev, [productId]: updatedQty };
      } else {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  // TOTAL PRICE 
  const getTotalCartAmount = () => {
    if (!all_product.length) return 0;

    let total = 0;

    // Create fast lookup map
    const productMap = {};
    all_product.forEach((p) => {
      productMap[p._id] = p;
    });

    for (const productId in cartItems) {
      const product = productMap[productId];
      if (product) {
        total += Number(product.new_price) * cartItems[productId];
      }
    }

    return total;
  };

  // TOTAL ITEMS 
  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  // CONTEXT PROVIDER 
  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmount,
        setAuthToken,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
