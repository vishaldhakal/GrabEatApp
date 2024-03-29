import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState(null);
  const [ordernote, setOrdernote] = useState(null);

  const handleTablechange = (val) => {
    setTable(val);
  };
  const handleOrdernotechange = (val) => {
    setOrdernote(val);
  };

  const addToCart = (item) => {
    setCart((prevState) => {
      const indexOfItem = prevState.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );
      if (indexOfItem === -1) {
        return [...prevState, { item: item, qty: 1 }];
      }
      increaseItem(item);
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

  const increaseItem = (item) => {
    setCart(
      cart.map((cartitem) => {
        if (cartitem.item.id === item.id) {
          return { ...cartitem, qty: cartitem.qty + 1 };
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
    handleOrdernotechange,
    handleTablechange,
    table,
    ordernote,
  };
  return (
    <AppContext.Provider value={hahavalues}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
