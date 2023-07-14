import { toast } from "react-hot-toast";
import Home from "./components/Home";
import {  BrowserRouter, Route, Routes,  } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./tailwind.css";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import React, { useState, useEffect } from "react";
import {
  getCartFromLocalStorage,
  setCartToLocalStorage,
} from "../src/components/LocalStorage";
import { Toaster } from "react-hot-toast";
export default function App() {
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [products] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  

  const changeCategory = (category) => {
    setCurrentCategory(category.categoryName);
    
  };
  useEffect(() => {
    const cartFromLocalStorage = getCartFromLocalStorage();
    setCart(cartFromLocalStorage);
  }, [setCart]);

  useEffect(() => {
    setCartToLocalStorage(cart);
  }, [cart]);
  const removeFromCart = (product) => {
    const addedItem = cart.find((c) => c.product.id === product.id);
    if (addedItem) {
      if (addedItem.quantity > 1) {
        const updatedCart = cart.map((c) =>
          c.product.id === product.id ? { ...c, quantity: c.quantity - 1 } : c
        );
        setCart(updatedCart);
        toast.error(`${product.name} Ürünü -1 Sepetten Çıkarıldı`);
      } else {
        const updatedCart = cart.filter((c) => c.product.id !== product.id);
        setCart(updatedCart);
        toast.error(`${product.name} Ürünü Sepetten  Silindi`);
      }
    } else {
      toast.error(`${product.name} Ürünü Sepette Bulunmuyor`);
    }
  };
  const addToCart = (product) => {
    const addedItem = cart.find((c) => c.product.id === product.id);
    if (addedItem) {
      const updatedCart = cart.map((c) =>
        c.product.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
        
      );
      setCart(updatedCart,toast.success(`${product.name} Ürünü +1 Sepet'e Eklendi`));
    } else {
      const newItem = { product: product, quantity: 1 };
      setCart([...cart, newItem]);
      toast.success(`${product.name} Ürünü Sepet'e Eklendi`)
    }

  };
  
  return (
    <>
      <Toaster toastOptions={{
    
    className: '',
    duration: 4000,
    

    
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }} />
      <BrowserRouter>
        <Routes>
          
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={setCart}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                currentCategory={currentCategory}
                products={products}
                changeCategory={changeCategory}
              />
            }
          />

          <Route path="/contact" element={<Contact cart={cart} />} />
          <Route
            path="/login"
            element={
              <Login
                cart={cart}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                cart={cart}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}