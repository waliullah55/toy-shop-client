import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllToy = () => {
  const [Toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);
  const handleDeleteToy = (id) => {
    fetch(`http://localhost:5000/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if (data.deletedCount > 0) {
        const remaining = Toys.filter(toy => toy._id !== id);
        setToys(remaining);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Toy deleted sucessfully......',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  return (
    <div>
        <Helmet><title>Toy Shop | All Toy</title></Helmet>
      <div className="overflow-x-auto my-16">
        <table className="table">
          {/* head */}
          <thead className="text-[#151515]">
            <tr>
              <th className="">
                <label >
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="font-bold text-xl">Image</th>
              <th className="font-bold text-xl">Name</th>
              <th className="font-bold text-xl">Seller Info</th>
              <th className="font-bold text-xl">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {Toys.map((toy) => (
              <tr key={toy._id}>
                <th>
                  <button onClick={() =>handleDeleteToy(toy._id)} className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <img className="w-28 h-20 rounded-3xl" src={toy.img} />
                </td>
                <td>
                  <h2 className="font-semibold text-lg">{toy.name}</h2>
                </td>
                <td>
                  <h1 className="font-medium">{toy.sellerName}</h1>
                  <br />
                  <span className="">{toy.seller_mail}</span>
                </td>
                {/* <td>Purple</td> */}
                <th>
                  <Link
                    to={`/details/${toy._id}`}
                    className="text-white w-full bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >Details </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
