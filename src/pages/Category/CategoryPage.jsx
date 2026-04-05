import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductByCategory } from "../../Features/productSlice";
import Layout from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const CategoryPage = () => {
  const { category } = useParams();
  const { items, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(5);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState(""); // "low to high", "high to low",

  // for sorting "high to Low" or "low to high"
  const sortByproduct = useMemo(()=>{
    // ১. প্রথমে নির্দিষ্ট ক্যাটাগরির প্রোডাক্টগুলো আলাদা করা
     let filtered = items.filter((product)=> product.category.toLowerCase() === category.toLocaleLowerCase());

     if(sortBy=== "lowToHigh"){
      return [...filtered].sort((a,b)=> a.price - b.price);
     } else if (sortBy === "highToLow"){
      return [...filtered].sort((a, b)=> b.price - a.price);
     }

     return filtered;

  },[items, sortBy, category])


  //    for brand toogle
  const toggleView = () => {
    if (expanded) {
      setVisibleCount(5); // আগের অবস্থায় ফিরে যাবে
    } else {
      setVisibleCount(categoriesBrand.length); //সব show করবে
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    dispatch(fetchProductByCategory(category));
  }, [dispatch, category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
    <Layout>
      <Breadcrumb />
      <div className="flex">
        {/* brand and rating sorting */}
        <div className="w-78 bg-white p-6 rounded-xl shadow hidden lg:block">
          {/* brand */}
          <div className="">
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
          {/* price sorting  */}
          <div className="flex flex-col gap-4 mt-5">
            <h4>Price</h4>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Minimum"
                className="py-1 border border-gray-400 px-2 w-30  focus:outline-pink-200"
              />
              <span>-</span>
              <input
                type="text"
                placeholder="Maximum"
                className="py-1 border border-gray-400 px-2 w-30  focus:outline-pink-200"
              />
            </div>
          </div>
          {/* rating sorting  */}
          <div></div>
        </div>
        {/* category detais page  */}
        <div className="flex-1">
          {/* filtering and sorting items  */}
          <div className="px-5 py-2 flex flex-col md:flex-row gap-4 justify-between">
            {/* category name and total found  */}
            <div className="">
              <h1 className=" text-xl uppercase"> {category}</h1>
              <p className="text-gray-400 text-lg">
                {items.length} items found for "{category}"
              </p>
            </div>
            {/* filtering by high to low prodect  */}
            <div className="flex items-center gap-3">
              <h4 className="text-xl text-gray-500">Sort By </h4>
              <select className="w-70 bg-white px-4 py-2 rounded-2xl border border-gray-300 transition-all duration-150 "
              onChange={(e)=> setSortBy(e.target.value) }
              >
                <option value="default">Best Match</option>
                <option value="highToLow">High to Low (Price)</option>
                <option value="lowToHigh">Low to High (Price)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
            {sortByproduct.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-pink-500">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
