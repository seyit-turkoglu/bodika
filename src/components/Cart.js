import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Cart({ cart = [], removeFromCart, addToCart }) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const cartItems = cart || [];
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      toast.error("Sepet'e Gitmeden Önce Giriş Yapın Lütfen");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="min-h-screen">
      <Header cart={cart} />
        {cartItems.length === 0 ? (
          <h1 className="font-bold text-6xl text-center mt-32">Sepetiniz Boştur</h1>
        ) : (
          <>
            
            <h1 className="font-bold text-6xl text-center mt-6">Sepet Detayı</h1>

            <Table striped className="ml-[500px] mt-12 bg-slate-100 rounded shadow-lg shadow-black">
              <thead>
                <tr>
                  <th className=" bg-white mb-4">#</th>
                  <th className="pl-16">Kategori</th>
                  <th className="pl-16">Ürün İsmi</th>
                  <th className="pl-16">Ürün Fiyatı</th>
                  <th className="pl-16">Ürün Adeti</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                  <tr className="relative mt-4" key={cartItem.product.id}>
                    <td className="pb-4">
                      <img
                        className="w-40 h-40 bg-slate-300"
                        src={cartItem.product.img}
                        alt=""
                      />
                    </td>
                    <td className="pl-16">{cartItem.product.categoryName}</td>
                    <td className="pl-16">{cartItem.product.name}</td>
                    <td className="pl-16 text-green-600 underline">
                      {cartItem.product.price.toLocaleString()}$
                    </td>
                    <td className="pl-12 hover:opacity-70 duration-300">
                      <Button
                        className="bg-blue-500 rounded-full text-white h-8 w-8"
                        onClick={() => handleAddToCart(cartItem.product)}
                      >
                        +
                      </Button>
                    </td>
                    <td className="text-lg absolute top-[70px] right-40 font-bold">
                      {cartItem.quantity}
                    </td>
                    <td className="pr-[105px] hover:opacity-70 duration-300">
                      <Button
                        className="bg-red-500 rounded-full text-white h-8 w-8"
                        onClick={() => handleRemoveFromCart(cartItem.product)}
                      >
                        -
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </div>
      <Footer fixed />
    </>
  );
}