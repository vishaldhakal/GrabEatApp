import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevState) => {
      const indexOfItem = prevState.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );
      console.log(indexOfItem);
      if (indexOfItem === -1) {
        return [...prevState, { item: item, qty: 1 }];
      }
      let newqty = cart[indexOfItem].qty + 1;
      return [
        ...prevState.slice(0, indexOfItem),
        ...prevState.slice(indexOfItem + 1),
        { item: item, qty: newqty },
      ];
    });
  };

  const decreaseItem = (item) => {
    setCart(
      cart.map((cartitem) => {
        if (cartitem.item.id === item.id) {
          return { ...cartitem, qty: cartitem.qty - 1 };
        } else {
          return cartitem;
        }
      })
    );
  };

  const removeFromCart = (item) => {
    setCart((prevState) => {
      const indexOfItemToRemove = prevState.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return cart;
      }

      return [
        ...prevState.slice(0, indexOfItemToRemove),
        ...prevState.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  function totalAmount() {
    let total = 0;
    cart.map((cartitem) => {
      total += cartitem.item.price * cartitem.qty;
    });
    return Math.floor(total);
  }

  function serviceCharge() {
    let charge = (13 / 100) * totalAmount();
    return Math.floor(charge);
  }

  const hahavalues = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    decreaseItem,
    serviceCharge,
    totalAmount,
  };
  return (
    <AppContext.Provider value={hahavalues}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
