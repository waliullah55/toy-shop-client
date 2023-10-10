import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    const {user} = useContext(AuthContext);
  const {register,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = (data) => {
    const { sellerName,email: seller_mail,name,rating,price,available,photoURL,category,} = data;
    const newToy = {sellerName, email: seller_mail, name, rating, price, available, photoURL, category, };
    fetch('http://localhost:5000/toys', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Toy added sucessfully......',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  };
  return (
    <div className="my-12">
        <Helmet><title>Toy Shop | Add Toy</title></Helmet>
        <h2 className="font-bold text-2xl text-center my-6 w-32 tracking-widest p-2 mx-auto border-cyan-600 border-b-8">Add Toy</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Seller Name</span>
                    </label>
                    <input defaultValue={user?.displayName} {...register("sellersellerName", { required: true })} type="text" placeholder="Seller Name" className="input input-bordered w-full input-info" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Seller Email</span>
                    </label>
                    <input defaultValue={user?.email} {...register("email", { required: true })} type="email" placeholder="Seller Email" className="input input-bordered w-full input-info" />
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Product Name" className="input input-bordered w-full input-info" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Rating</span>
                    </label>
                    <input {...register("rating", { required: true })} type="number" placeholder="Rating" className="input input-bordered w-full input-info" />
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Price</span>
                    </label>
                    <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full input-info" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Available Product</span>
                    </label>
                    <input {...register("available", { required: true })} type="number" placeholder="Available" className="input input-bordered w-full input-info" />
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Photo URL</span>
                    </label>
                    <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered w-full input-info" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Category</span>
                    </label>
                    <select className="input input-bordered w-full input-info" {...register("category")}>
                        <option value="Car">Car</option>
                        <option value="Truck">Truck</option>
                        <option value="Motor">Motor</option>
                    </select>
                </div>
                </div>

        </div>

        {errors.exampleRequired && <span>This field is required</span>}
        <div className="text-center mt-8">
        <button className="btn btn-info btn-block btn-outline textlg text-center font-semibold text-white">Add A Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
