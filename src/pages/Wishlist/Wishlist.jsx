import React from "react";
import Layout from "../../components/Layout/Layout";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";

import WhishLIstCard from "./WhishLIstCard";

const Wishlist = () => {
  return (
    <section>
      <Layout>
        <div className="px-20 py-8 bg-white my-8 ">
          <div className="my-5">
            <h3 className="text-2xl">Wishlist</h3>
            <div className="h-px bg-gray-300 mt-3"></div>
          </div>

          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <input type="checkbox" className="w-5 rounded-5xl" />
              <p>Select all 2 item(s)</p>
            </div>
            <button className="flex items-center border border-pink-500 px-4 py-2 rounded-xl cursor-pointer">
              <MdAddShoppingCart />
              <span>Add All</span>{" "}
            </button>
          </div>

          <div className="bg-amber-100 flex px-10 py-4 justify-between mt-5 rounded-sm">
            <h4>Product Details</h4>
            <h4>Price</h4>
            <h4>Action</h4>
          </div>

          {/* wishlist card  */}
          <div className="space-y-4 mt-5">
            <WhishLIstCard/>
            <WhishLIstCard/>
            <WhishLIstCard/>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Wishlist;
