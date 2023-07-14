import Header from "./Header";
import Products from "./Products";
import Category from "./Category";
import Footer from "./Footer";

export default function Home({cart,setCart,removeFromCart,addToCart,currentCategory,products,changeCategory,p}) {
  

  

  

  return (
    <>
    
      <Header removeFromCart={removeFromCart} cart={cart}></Header>
      <div className="flex  mt-12 ml-[200px]">
        <h1 className="bg-green-400 text-center rounded-xl py-1 px-1 text-lg">
          Kategori{" "}
        </h1>
        <span className="text-3xl text-center pb-1 font-bold">-</span>
        <h1 className="bg-yellow-400 text-center rounded-xl py-1 font-bold text-white text-xl">
          {currentCategory}
        </h1>
      </div>

      <div className="flex flex-row">
        <div className="ml-[165px]">
          <Category changeCategory={changeCategory} />
        </div>
        <div className="basis-3/4">
          <Products
            products={products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            currentCategory={currentCategory}
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
  }