import React from "react";
import Layout from "../Layout/Layout";

// ইমেজ ইম্পোর্টসমূহ
import mens from "../../assets/category/mensF.png";
import computer from "../../assets/category/computing-gaming.png";
import automotiveMotorcycle from "../../assets/category/automotive-motorcycle.png";
import electronicAccessories from "../../assets/category/electronic-accessories.png";
import groceriesPet from "../../assets/category/groceries-pet.png";
import homeLivingt from "../../assets/category/home-living.png";
import healthBeauty from "../../assets/category/health-beauty.png";
import lifestyle from "../../assets/category/lifestyle.png";
import mothersBaby from "../../assets/category/mothers-baby-care-1739453666417.png&width=180&w=3840&q=75.png";
import phonesAccessories from "../../assets/category/phones-accessories.png";
import sportsOutdoors from "../../assets/category/sports-outdoors.png";
import tvHome from "../../assets/category/tv-home.png";
import watchesBags from "../../assets/category/watches-bags.png";
import women from "../../assets/category/women.png";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  // ক্যাটাগরি ডেটা অ্যারে
  const categories = [
    { id: 1, title: "tops", image: mens },
    { id: 2, title: "laptops", image: computer },
    { id: 3, title: "Furniture", image: homeLivingt },
    { id: 4, title: "Groceries", image: groceriesPet },
    { id: 5, title: "Beauty", image: healthBeauty },
    { id: 6, title: "Women's Fashion", image: women },
    { id: 7, title: "Tv & Home Appliances", image: tvHome },
    { id: 8, title: "Lifestyle & Hobbies", image: lifestyle },
    { id: 9, title: "Electronics Accessories", image: electronicAccessories },
    { id: 10, title: "Watches & Bags", image: watchesBags },
    { id: 11, title: "mens-shoes", image: sportsOutdoors },
    { id: 12, title: "Mother & Baby", image: mothersBaby },
    { id: 13, title: "Motorcycle", image: automotiveMotorcycle },
    { id: 14, title: "SmartPhones", image: phonesAccessories },
  ];

  return (
    <section>
      <Layout>
        <h3 className="bg-white md:p-5 text-2xl my-6 px-5 font-bold">
          Categories
        </h3>

        {/* গ্রিড কন্টেইনার */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 items-start justify-center">
          {categories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center space-y-2 group cursor-pointer"
              onClick={() => navigate(`/category/${item.title.toLowerCase().replace(/\s+/g, "-")}`)}
            >
              {/* ইমেজ কন্টেইনার এবং হোভার ইফেক্ট */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* টাইটেল */}
              <h4 className="text-sm md:text-base font-medium leading-tight px-2">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default Category;
