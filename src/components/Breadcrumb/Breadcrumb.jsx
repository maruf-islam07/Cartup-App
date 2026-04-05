import { Link, useLocation } from "react-router-dom";
import { FaAngleRight, FaHome } from "react-icons/fa";

const nameMap = {
  product: "Products",
  groceries: "Groceries",
  fruits: "Fruits",
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm my-3">
      <nav className="flex items-center text-sm text-gray-600">
        <Link to="/">
          <FaHome className="font-medium" />
        </Link>

        {pathNames.map((value, index) => {
          const to = "/" + pathNames.slice(0, index + 1).join("/");
          const isLast = index === pathNames.length - 1;
          const label = nameMap[value] || value;

          return (
            <div key={to} className="flex items-center">
              <FaAngleRight className="mx-2 text-xl" />

              {isLast ? (
                <span className="text-black font-semibold capitalize">
                  {label}
                </span>
              ) : (
                <Link to={to} className="hover:text-black capitalize">
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;