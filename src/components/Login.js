import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { login } from "./FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../store/auth";

export default function Login({
  cart,
  setEmail,
  setPassword,
  email,
  password,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      dispatch(loginHandle(user));
      navigate("/cart", {
        replace: true,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <Header cart={cart} />
        <h1 className="text-6xl font-bold text-center mt-[200px]">LOGIN</h1>
        <div className="flex justify-center items-center my-20">
          <form onSubmit={handleLoginSubmit} className="w-96">
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={!email || !password}
              className="w-full py-2 bg-indigo-600 disabled:opacity-40 text-white rounded-lg mb-[370px]"
            >
              LOGIN
            </button>
          </form>
        </div>
        <Footer fixed/>
      </div>
    </>
  );
}