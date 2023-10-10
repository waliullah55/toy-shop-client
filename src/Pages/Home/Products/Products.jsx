import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8">
        {Products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
