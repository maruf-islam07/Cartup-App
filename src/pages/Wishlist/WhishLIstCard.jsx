import React from "react";
import { BsCartPlus } from "react-icons/bs";
import photo from "../../assets/category/mensF.png";
import { MdDelete } from "react-icons/md";

const WhishLIstCard = () => {
  return (
    <div className="border border-gray-200 px-5 flex justify-between items-center py-2 ">
      <div className="flex items-center gap-4 ">
        <input type="checkbox" className=" w-4 h-5" />
        <img src={photo} alt="img" className="border w-20" />

        <div>
          <h2 className="w-50">Kiam Classic Belly Shape Saucepan inducation</h2>
          <p className="bg-gray-100">Color-Silver</p>
          <button className="text-xl cursor-pointer">
            <MdDelete />
          </button>
        </div>
      </div>
      <div className="-ms-40">
        <p>Price</p>
        <p>Discount Price</p>
      </div>
      <button className="bg-pink-500 text-white px-2 py-2 rounded-lg text-2xl cursor-pointer ">
        <BsCartPlus />
      </button>
    </div>
  );
};

export default WhishLIstCard;
