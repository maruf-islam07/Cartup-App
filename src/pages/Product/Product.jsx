import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductByCategory } from "../../Features/productSlice";
import Layout from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";

const Product = () => {
  const products = useSelector((state) => state.product.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByCategory("all"));
  }, [dispatch]);

  const [visibleCount, setVisibleCount] = useState(5);
  const [expanded, setExpanded] = useState(false);

  const [visible, setVisible] = useState(40);
  const [doneMessage, setDoneMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProduct = () => {
    if (products.length > visible) {
      setIsLoading(true);
      setTimeout(() => {
        setVisible((prev) => prev + 40);
        setIsLoading(false);
      }, 1000);
    } else {
      setDoneMessage("No More Product");
    }
  };

  const toggleView = () => {
    if (expanded) {
      setVisibleCount(5); // আগের অবস্থায় ফিরে যাবে
    } else {
      setVisibleCount(categoriesBrand.length); //সব show করবে
    }
    setExpanded(!expanded);
  };

  const categoriesBrand = [
    "Dettol",
    "RFL",
    "Herlan",
    "No Brand",
    "Proclean",
    "Summer",
    "Blossom",
    "Fresh Garden",
    "Pran",
    "Ribana",
    "Xtreme",
  ];

  return (
    <section className="my-10">
      <Layout>
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Product Section */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          {/* Left Side */}
          <div className="col-span-1 bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-3">Brand</h2>

            {categoriesBrand.slice(0, visibleCount).map((brand, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input type="checkbox" />
                <label>{brand}</label>
              </div>
            ))}
            <button onClick={toggleView} className="text-blue-500 mt-2">
              {expanded ? "View Less" : "View More"}
            </button>
          </div>

          {/* Right Side */}
          {/* all product card */}
          <div className="col-span-3 grid grid-cols-3 lg:grid-cols-4 gap-4">
            {/* single product card*/}
            {products.slice(0, visible).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="p-3 border rounded-xl">
                  <img src={product.thumbnail} alt={product.title} />
                  <h3 className="text-sm mt-2">${product.title}</h3>
                  <p className="font-semibold">${product.price}</p>
                  <p className="line-through text-gray-400">{product.C}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

         {/* load more product btn and no more product */}
        <div className="flex items-center justify-center ms-70 my-8 gap-2">
          {doneMessage ? (
            <p className="text-gray-500 font-medium italic">{doneMessage}</p>
          ) : (
            <button
              onClick={loadMoreProduct}
              disabled={isLoading} // লোড হওয়ার সময় ক্লিক বন্ধ থাকবে
              className={`px-8 py-4 bg-white rounded-2xl text-gray-700 border border-gray-200 font-semibold shadow-sm transition-all
        ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 active:scale-95"}`}
            >
              {isLoading ? (
                <div className="flex items-center">
                  {/* একটি সিম্পল সিএসএস স্পিনার */}
                  <div className="w-4 h-4 border-2 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                <p className="flex items-center gap-3">
                    Load More <TfiReload className="text-lg" /> 
                </p>
                
              )}
            </button>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default Product;
