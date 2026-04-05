import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { fetchSingleProduct } from "../../Features/productSlice";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { addToCart } from "../../Features/cartSlice";

const ProductDetais = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.singleProduct);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  if (!product) return <p>Loading...</p>;
  return (
    <section>
      <Layout>
        {/* breadcrumbs */}
        <Breadcrumb />
        {/* product and details  */}
        <div className="flex flex-col lg:flex-row gap-9 bg-white rounded-2xl shadow  mx-auto p-10 my-20">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-129.25 w-lg object-cover rounded-xl border border-gray-400"
          />
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-semibold mt-4 border-b border-gray-300">
              {product.title}
            </h2>
            <p className="text-gray-600 mt-2 border-b border-gray-300">
              {product.description}
            </p>

            <p className="font-bold text-lg mt-3 border-b border-gray-300">
              ${product.price}
            </p>

            {/* button  */}
            <div className="flex flex-wrap gap-5 items-center">
              <button className="px-10 md:px-28 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl text-white font-semibold ">
                Buy Now
              </button>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="px-10 md:px-28 py-2 bg-linear-to-r from-purple-500 to-blue-600 rounded-3xl text-white font-semibold "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default ProductDetais;
