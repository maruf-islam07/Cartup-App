import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByCategory } from "../../Features/productSlice";

const Searchpage = () => {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("");

  // Redux থেকে প্রোডাক্ট আনা এবং খালি অ্যারে হ্যান্ডেল করা
  const allProducts = useSelector((state) => state.product.items) || [];

  useEffect(() => {
    dispatch(fetchProductByCategory("all"));
  }, [dispatch]);

  // ১. সার্চ টার্মকে শব্দে বিভক্ত করা
  const searchWords = searchTerm
    ? searchTerm
        .toLowerCase()
        .split(" ")
        .filter((word) => word.trim() !== "")
    : [];

  // ১. প্রথমে ফিল্টার করুন (সার্চ অনুযায়ী)
  let filtered = allProducts.filter((product) => {
    const productName = (product.title || product.name || "").toLowerCase();
    // সার্চের শব্দগুলো মিলছে কি না চেক
    return searchWords.some((word) => productName.includes(word));
  });

  // ২. এবার ফিল্টার করা রেজাল্টকে সর্ট করুন (sortBy অনুযায়ী)
  const filteredProducts = [...filtered].sort((a, b) => {
    if (sortBy === "lowToHigh") {
      return a.price - b.price; // কম থেকে বেশি
    } else if (sortBy === "highToLow") {
      return b.price - a.price; // বেশি থেকে কম
    }
    return 0; // ডিফল্ট (সর্ট হবে না)
  });

  return (
    <Layout>
      <div className="p-5 ">
        <div className="mb-8 flex justify-between flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Search Results for:{" "}
              <span className="text-pink-600">"{searchTerm}"</span>
            </h2>
            <p className="text-gray-500 text-sm">
              {filteredProducts.length} items found
            </p>
          </div>
          {/* filtering by high to low prodect  */}
          <div className="flex items-center gap-3">
            <h4 className="text-xl text-gray-500">Sort By </h4>
            <select
              className="w-70 bg-white px-4 py-2 rounded-2xl border border-gray-300 transition-all duration-150 "
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Best Match</option>
              <option value="lowToHigh">Low to High (Price)</option>
              <option value="highToLow">High to Low (Price)</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group border p-3 rounded-xl hover:shadow-lg transition-all duration-300 bg-white flex flex-col"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-50">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-sm md:text-base font-medium text-gray-700 h-10 overflow-hidden line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center mt-auto pt-3">
                  <span className="text-pink-600 font-bold text-lg">
                    ৳{product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-6xl mb-4 grayscale opacity-20">🔍</div>
            <p className="text-xl text-gray-500 italic text-center">
              দুঃখিত, আপনার সার্চ করা শব্দের সাথে মেলে এমন কিছু পাওয়া যায়নি।
            </p>
            <button
              onClick={() => window.history.back()}
              className="mt-5 text-pink-600 font-medium hover:underline flex items-center gap-2"
            >
              <span>←</span> ফিরে যান
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Searchpage;
