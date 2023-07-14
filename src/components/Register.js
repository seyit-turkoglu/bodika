import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { register } from "./FireBase";

export default function Register({
  cart,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    navigate("/login");
    return user;
  };

  return (
    <>
      <Header cart={cart} />
      <div className="min-h-screen">
        <h1 className="text-6xl font-bold text-center mt-[200px]">REGISTER</h1>
        <div className="flex justify-center items-center my-20">
          <form onSubmit={handleRegisterSubmit} className="w-96">
            <input
              type="text"
              name="text"
              value={email}
              className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              placeholder="E-posta adresi"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={!email || !password}
              type="submit"
              className="w-full py-2 bg-indigo-600 disabled:opacity-40 text-white rounded-lg mb-[410px]"
            >
              Register
            </button>
          </form>
        </div>
        <Footer fixed />
      </div>
    </>
  );
}