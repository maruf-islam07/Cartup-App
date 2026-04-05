import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { fetchSingleProduct } from "../../Features/productSlice";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { addToCart } from "../../Features/cartSlice";
import Rating from "../Rating/Rating";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

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
            className="h-129.25 w-lg object-cover rounded-xl border border-gray-400 mx-auto"
          />
          <div className="flex flex-col gap-10">
            {/* product title  */}
            <div>
              <h2 className="text-3xl font-semibold">
                {product.title}
                <div className="h-px bg-gray-200 mt-5"></div>
              </h2>
            </div>

            {/* rating and wishlist */}
            <div>
              <div className="flex items-center justify-between"> 
                <div className="flex gap-2 items-center text-xl">
                  <Rating rating={product.rating} />
                  <p className="text-sm">{product.rating}</p>
                </div>
                <div className="flex items-center gap-4 text-2xl text-gray-400">
                   <CiShare2  />
                   <FaHeart  />
                </div>
              </div>

              <div className="h-px bg-gray-200 mt-5"></div>
            </div>
  
            {/* price and more  */}
            <div className="text-lg mt-3 ">
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-pink-600 text-2xl font-bold">
                    ${product.price}
                  </p>
                  <p className="line-through text-gray-500 text-sm">
                    ${product.discountPercentage}
                  </p>
                  <p className="px-2 py-1.5 bg-pink-200 text-pink-500 text-sm rounded-2xl ">
                    -4%
                  </p>
                </div>

                <div>
                  <p className="bg-green-200 inline px-2 rounded-2xl text-sm">
                    {product.availabilityStatus}
                  </p>
                  <p>SKU: {product.sku}</p>
                </div>
              </div>

              <div className="h-px bg-gray-200 mt-5"></div>
            </div>
            

            {/* button  */}
            <div className="flex  flex-wrap gap-5 items-center">
              <button className="px-10 md:px-40 lg:px-30 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl text-white font-semibold ">
                Buy Now
              </button>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="px-10 md:px-40 lg:px-30 py-2 bg-linear-to-r from-purple-500 to-blue-600 rounded-3xl text-white font-semibold "
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
