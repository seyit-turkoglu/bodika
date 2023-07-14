export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  export const setCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };