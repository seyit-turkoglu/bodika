import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div className="bg-black mt-6">
      <div className="container mr-auto py-10 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/4 flex-row">
          <h1 className="text-white ml-8 text-[100px] bodika -rotate-[8deg] mt-8 hover:text-gray-400 transition duration-300">
            BODİKA
          </h1>
        </div>
        <div className="w-full md:w-1/6 ml-[120px]">
          <h1 className="text-red-600 text-4xl mt-8">Links</h1>
          <div className="space-y-1">
          <a
              href="/"
              className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block"
            >
              Anasayfa
            </a>
            <a
              href="/contact"
              className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block"
            >
              İletişim
            </a>
            <a
              href="/register"
              className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block"
            >
              Register
            </a>
            <a
              href="/login"
              className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block"
            >
              Login
            </a>
            <a
              href="/cart"
              className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block"
            >
              Sepet
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/6 ">
          <h1 className="text-red-600 text-4xl mt-8">Media</h1>
          <div className="space-y-1">
            <a href="/" className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </a>
            <a href="/contact" className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block">
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </a>
            <a href="/register" className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block">
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              Twitter
            </a>
            <a href="/login" className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block">
              <FontAwesomeIcon icon={faYoutube} className="mr-2" />
              Youtube
            </a>
            <a href="/cart" className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/6 ml-2">
          <h1 className="text-red-600 text-4xl mt-8">Contact</h1>
          <div className="space-y-1">
            <p className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block">
              seyitturkoglu0@gmail.com
            </p>
            <p
              href="/contact"
              className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block"
            >
              0545 605 67 42
            </p>
            <p
              href="/register"
              className="text-white text-xl opacity-75 hover:opacity-100 duration-500 py-2 block"
            >
             Mersin/Yenisehir
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/6">
          <h1 className="text-red-600 text-4xl mt-8 pb-4 pl-12">FOLLOW US</h1>
          <form className="flex">
            <input
              className="placeholder-gray-400 bg-transparent border-b-2 border-gray-400 outline-none text-white w-56 h-10 pr-2"
              placeholder="TYPE YOUR EMAIL"
              type="text"
            />
            <button className="bg-red-500 text-white px-4 py-2 ml-4">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
