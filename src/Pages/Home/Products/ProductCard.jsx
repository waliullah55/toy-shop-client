import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({product}) => {
  const { _id, name, img, price, rating } = product;
//   console.log(product);
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-4 h-80 rounded-t-lg" src={img} alt="product image" />
      </a>
      <div className="px-5 pb-5 ">
        <a href="#">
          <h5 className="text-xl pb-0 mb-0 font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex items-center justify-between my-4">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            Price: ${price}
          </span>
          <ReactStars
            count={5}
            isHalf={true}
            value={rating}
            edit={false}
            size={35}
            activeColor="#FF912C"
          />
        </div>
        <div className="flex items-center mb-2">
          <Link
            to={`details/${_id}`}
            className="text-white w-full bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
