import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { fetchProductByCategory } from "../../Features/productSlice";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";

const ProductList = () => {
  const productlist = useSelector((state) => state.product.items);

  const dispatch = useDispatch();

  const [visibleProduct, setVisibleProduct] = useState(40);
  const [doneMessage, setDoneMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProduct = () => {
    if (visibleProduct < productlist.length) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleProduct((prev) => prev + 40);
        setIsLoading(false);
      }, 1000);
    } else {
      setDoneMessage("No More Product");
    }
  };

  useEffect(() => {
    dispatch(fetchProductByCategory("all"));
  }, [dispatch]);

  return (
    <div className="my-6">
      <Layout>
        <h3 className="bg-white md:p-4 text-2xl my-7 px-5">
          Deals You Can’t Miss
        </h3>
        {/* all card  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {productlist.slice(0, visibleProduct).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              {/* card start */}
              <div className="p-2 bg-white rounded-xl space-y-5 ">
                {/* Card Image  */}
                <div>
                  <img src={product.thumbnail} alt="" className="w-58.25 h-" />
                </div>
                {/* card content  */}
                <div className="space-y-2">
                  <h1>{product.title}</h1>
                  <p className="text-pink-600 text-xl font-semibold ">
                    ${product.price}
                  </p>
                  <p className="bg-pink-300 px-1 py-1 rounded-full inline text-xs">
                    -63%
                  </p>
                  <p className="line-through text-gray-500 font-semibold">
                    ${product.discountPercentage}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* load more product btn and no more product */}
        <div className="flex items-center justify-center my-8 gap-2">
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
                <div className="flex items-center gap-2">
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
    </div>
  );
};

export default ProductList;
