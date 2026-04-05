import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ProductList from "../../components/ProductList/ProductList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { addToCart, decrementQuantity, removeFromCart } from "../../Features/cartSlice";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()

  
  return (
    <section className="my-10">
      <Layout>
        {/* breadcrumbs */}
        <Breadcrumb />
        {/* cart items section */}
        <section>
          <div className="bg-white px-20 py-5 rounded-xl ">
            {/* cart top */}
            <div>
              <div className="flex justify-between">
                {/* right side  */}
                <div className="flex items-center py-4 gap-4">
                  <h3 className="text-xl">Cart Items ({cartProduct.length})</h3>
                  <input type="checkbox" name="select" className="h-4 w-4" />
                  <h4 className="text-lg" name="select">
                    Select All{" "}
                  </h4>
                </div>
                {/* left side */}
                <div className="flex items-center gap-1 text-gray-400">
                  <span>Delete</span>
                  <RiDeleteBin6Line />
                </div>
              </div>
              
              {/* cart all card  */}
              <div className="flex flex-col gap-2">
                {cartProduct.map((cart) => (
                  <div key={cart.id} className="bg-blue-100 p-2 rounded-xl ">
                    {/* cart top  */}
                    <div className="flex justify-between p-2">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="h-4 w-4" />
                        <p>ZangMart</p>
                      </div>
                      <div>
                        <p>1 items</p>
                      </div>
                    </div>
                    {/* middle cart */}
                    <div className="bg-white flex flex-wrap justify-between  p-2 rounded-xl">
                      {/* image and checkbox */}
                      <div className="border-4 border-gray-200 rounded-xl relative">
                        <img
                          src={cart.thumbnail}
                          alt={cart.title}
                          className="h-25"
                        />
                        <input
                          type="checkbox"
                          className="absolute -top-1 -left-1 w-5 h-5 rounded-full "
                        />
                      </div>
                      {/* content  title and increment decrement btn */}
                      <div className="flex flex-col gap-4">
                        <h4 className="text-xl">{cart.title}</h4>
                        <div className="flex items-center gap-2">
                          <button className="bg-gray-200 px-4 rounded-2xl">
                            ● Color
                          </button>
                          <p className="text-green-500 text-sm">
                            Fulfilled by Seller
                          </p>
                        </div>

                        <div className="flex gap-2">
                          {/* Quantity Update Logic */}
                          <div className="border border-gray-300 max-w-fit px-2 rounded-2xl flex items-center">
                            <button
                              onClick={() => dispatch(decrementQuantity(cart.id))} // এখানে decrement লজিক হবে
                              className="border-r px-2 border-gray-300 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="border-r px-3 border-gray-300">
                              {cart.quantity}
                              {/* হার্ডকোডেড ২ এর বদলে cart.quantity */}
                            </span>
                            <button
                              onClick={() => dispatch(addToCart(cart))}
                              className="px-2 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <button className="border border-pink-500 text-pink-500 px-2 rounded-2xl text-sm hover:bg-pink-100">
                            More Items Like This
                          </button>
                        </div>
                      </div>
                      {/* price and action  */}
                      <div className="flex flex-col justify-between py-1 ">
                        <div>
                          <p className="text-2xl">${cart.price}</p>
                          <p className="line-through text-gray-400">
                            ${cart.discountPercentage}{" "}
                          </p>
                        </div>
                        {/* action  */}
                        <div className="flex items-center gap-2 text-xl text-gray-500">
                          <FaHeart />
                          <button onClick={()=> dispatch(removeFromCart(cart.id))}>
                            <RiDeleteBin6Line />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* bottom cart  */}
                    <div className="flex justify-between items-center p-3">
                      <p className="text-green-500">Standard Delivery</p>
                      <button className="bg-white border border-green-500 text-green-500 rounded-2xl px-2 text-sm">
                        No Product Selected
                      </button>
                    </div>
                  </div>
                ))}

                <div>
                  1232232
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* recently view product section  */}
        <section></section>
        {/* Deals You Can't Miss section  */}
        <section>
          <ProductList/>
        </section>
      </Layout>
    </section>
  );
};

export default Cart;
