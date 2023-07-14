import React from "react";
import "../tailwind.css";

export default function Product({ product,addToCart,removeFromCart }) {
  return (
    <>
      <div className=" mr-14 border-2 flex w-[244px] h-[444px]  rounded-xl shadow-gray-400 shadow-xl ">
        <div className="  duration-300">
          <div className="w-60 h-80 ">
            <img
              src={product.img}
              alt=""
              className="object-cover text-center"
              height="!1rem"
            ></img>
          </div>
          <div className="flex mb-4">
            <h2 className="mt-12 text-end text-lg font-bold">{product.name}</h2>
            <i className="ml-auto">
              <h2 className="mt-12 text-[#F27A1A] font-bold text-lg mr-1">
                ${product.price.toLocaleString()}
              </h2>
            </i>
          </div>
          <div className="flex ">
            <button onClick={()=>{addToCart(product)}} className="bg-blue-500 text-white w-[119px] text-lg font-bold hover:opacity-80 duration-300 rounded-md">
            Sepete Ekle
            </button>
            <button onClick={()=> {removeFromCart(product)}} className="bg-red-500 text-white w-[119px] text-lg font-bold ml-1 hover:opacity-80 duration-300 rounded-md ">
            Sepetten Sil
            </button>
          </div>
        </div>
      </div>
    </>
  );
}