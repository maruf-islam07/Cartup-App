import logo from "../../assets/cartup-logo.svg";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from "react-icons/md";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useState } from "react";
import { useRef } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  // Cart quantity
  const totalCart = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  // Categories (example)
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home‑decoration",
    "kitchen‑accessories",
    "laptops",
    "mens‑shirts",
    "mens‑shoes",
    "mens‑watches",
    "mobile‑accessories",
    "motorcycle",
    "skin‑care",
    "smartphones",
    "sports‑accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens‑bags",
    "womens‑dresses",
    "womens‑jewellery",
    "womens‑shoes",
    "womens‑watches",
  ];

  // Dropdown state
  const [showDropdown, setShowDropdown] = useState(false);

  // Search state
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <div className="sticky top-0 z-50">
      {/* top menu (desktop) */}
      <div className="bg-pink-100 hidden lg:block">
        <Layout>
          <ul className="flex items-center justify-end gap-4 text-sm py-2 h-12">
            <li className="text-pink-600 text-xs font-semibold">
              Save More on App
            </li>
            <li className="text-pink-600 text-xs font-semibold">
              Sell on Cartup
            </li>
            <li className="text-pink-600 text-xs font-semibold">
              Help & Support
            </li>
            <li className="text-pink-600 text-xs font-semibold">Login</li>
            <li className="text-pink-600 text-xs font-semibold">Sign up</li>
          </ul>
        </Layout>
      </div>

      {/* main navbar */}
      <nav className="bg-white shadow-sm px-4 md:px-0">
        <Layout>
          <div className="h-20 flex items-center justify-between">
            {/* logo + categories */}
            <div className="flex items-center gap-10">
              <Link to="/">
                <img src={logo} alt="logo" className="h-15 hidden lg:block" />
              </Link>

              {/* Categories dropdown */}
              <div
                className="relative hidden lg:flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => {
                  if (timerRef.current) clearTimeout(timerRef.current);
                  setShowDropdown(true);
                }}
                onMouseLeave={() => {
                  timerRef.current = setTimeout(() => {
                    setShowDropdown(false);
                  }, 150);
                }}
              >
                <HiMiniBars3CenterLeft className="text-2xl" />
                <span className="text-[16px] font-semibold">Categories</span>

                {showDropdown && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-52 mt-2 z-50">
                    <ul className="flex flex-col">
                      {categories.map((cat, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-pink-100 cursor-pointer capitalize"
                          onClick={() =>
                            navigate(`/category/${cat.toLowerCase()}`)
                          }
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* search box */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1 w-full lg:w-137 lg:h-11.25 ml-0">
              <CiSearch />
              <input
                type="text"
                placeholder="Search in Cartup"
                className="flex-1 px-2 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                className="bg-pink-600 px-3 py-2 rounded-lg text-white text-xs"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            {/* cart icon desktop */}
            <Link to="/cart">
              <div className="relative hidden lg:block">
                <MdOutlineShoppingCart className="text-xl text-pink-500" />
                {totalCart > 0 && (
                  <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
                    {totalCart > 99 ? "99+" : totalCart}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </Layout>
      </nav>

      {/* bottom navbar mobile */}
      <nav className="bg-white shadow-sm fixed lg:hidden bottom-0 z-50 w-full">
        <Layout>
          <ul className="h-20 flex items-center justify-around">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center text-lg ${
                    isActive ? "text-pink-500" : "text-gray-500"
                  }`
                }
              >
                <FaHome className="text-2xl" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <Link
                to="/category"
                className="flex flex-col items-center justify-center text-lg"
              >
                <BiCategory className="text-2xl" />
                <span>Category</span>
              </Link>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center text-lg relative ${
                    isActive ? "text-pink-500" : "text-gray-500"
                  }`
                }
              >
                <div className="relative">
                  <FaShoppingCart className="text-2xl" />
                  {totalCart > 0 && (
                    <span className="absolute -top-1 -right-2 text-[10px] px-1 rounded-full bg-pink-600 text-white">
                      {totalCart > 99 ? "99+" : totalCart}
                    </span>
                  )}
                </div>
                <span>Cart</span>
              </NavLink>
            </li>
            <li>
              <Link
                className="flex flex-col items-center justify-center text-lg"
                to="/account"
              >
                <MdOutlineAccountCircle className="text-2xl" />
                <span>Account</span>
              </Link>
            </li>
          </ul>
        </Layout>
      </nav>
    </div>
  );
};

export default Navbar;
