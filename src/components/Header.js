import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutHandle } from "../store/auth";
import { logout } from "./FireBase";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

export default function Header({ cart }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", { replace: true });
    toast.success("Çıkış Başarılı");
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="text-5xl font-bold hover:text-gray-400 transition duration-300 bodika"
            >
              BODİKA
            </Link>
          </div>
          <div className="col-span-1 md:col-span-1 text-right">
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li>
                  <Link
                    to="/"
                    className={`hover:text-gray-400 transition duration-300 text-xl ${
                      currentPath === "/" ? "text-blue-500" : ""
                    }`}
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`hover:text-gray-400 transition duration-300 text-xl ${
                      currentPath === "/contact" ? "text-blue-500" : ""
                    }`}
                  >
                    İletişim
                  </Link>
                </li>
                {user ? (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="hover:text-gray-400 transition duration-300 text-xl"
                    >
                      Çıkış Yap
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/register"
                        className={`hover:text-gray-400 transition duration-300 text-xl ${
                          currentPath === "/register" ? "text-blue-500" : ""
                        }`}
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className={`hover:text-gray-400 transition duration-300 text-xl ${
                          currentPath === "/login" ? "text-blue-500" : ""
                        }`}
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link
                    to="/cart"
                    className={`hover:text-gray-400 transition duration-300 text-xl ${
                      currentPath === "/cart" ? "text-blue-500" : ""
                    }`}
                  >
                    Sepet ({cart.length})
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
