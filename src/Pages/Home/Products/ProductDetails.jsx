import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);
  const { img, name, price, rating, sellerName, seller_mail, available } =
    loadedProduct;
  return (
    <div className="my-14">
      <Helmet> <title>Toy Shop | View Details</title></Helmet>
      <h2 className="font-bold text-2xl text-center w-60 tracking-widest p-2 mx-auto border-cyan-600 border-b-8">
        Product Details </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-12 mt-16">
        <div className="">
          <img src={img} className="w-[450px] h-[420px] border-2 border-slate-200 rounded-xl" alt="" />
        </div>
            <div>
                <h2 className="text-xl font-bold pb-2">Seller Information:</h2>
                <div >
                <h2 className="text-xl font-semibold">Name: {sellerName}</h2>
                <h2 className="text-xl font-semibold">Email: {seller_mail}</h2>
                </div>
                <div>
                    <h2 className="text-2xl font-bold pt-8 mb-3">Product Name: {name}</h2>
                    <h2 className="text-xl font-bold py-">Avaiable: <span className="text-[#ff3811]"> {available}</span></h2>
                    <h2 className="text-xl font-bold py-">Price: <span className="text-[#ff3811]">${price}</span></h2>
                    
                <div className="flex gap-3 items-center">
                    <h2 className="text-xl font-bold py-">Review: </h2>
                        <ReactStars
                            count={rating}
                            value={rating}
                            size={22}
                            isHalf={true}
                            edit={false}
                            activeColor="#ff3811"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 md:mt-12 pr-[40%]">
                <Link to={'/allToy'} className="btn btn-outline btn-info text-lg font-semibold">All Toys</Link>
                <Link to={'/'} className="btn btn-outline btn-info text-lg font-semibold">Back Home</Link>
                </div>
            </div>
      </div>
    </div>
  );
};

export default ProductDetails;
