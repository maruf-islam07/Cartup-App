import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-500">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={"full" + i} />
      ))}

      {/* Half Star */}
      {halfStar && <FaStarHalfAlt />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={"empty" + i} />
      ))}
    </div>
  );
};

export default Rating;