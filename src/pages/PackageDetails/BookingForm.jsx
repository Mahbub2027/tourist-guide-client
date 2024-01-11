import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";


const BookingForm = () => {
    const { price, trip_title } = useLoaderData();
    const { user } = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className="w-10/12 mx-auto my-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* name & email */}
                <div className="flex gap-5">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tourist Name*</span>
                        </div>
                        <input {...register("name")}
                            type="text"
                            defaultValue={user?.displayName}
                            placeholder="Type here"
                            className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tourist email*</span>
                        </div>
                        <input {...register("email")}
                            type="text"
                            defaultValue={user?.email}
                            placeholder="Type here"
                            className="input input-bordered w-full " />

                    </label>
                </div>
                {/* Image & price */}
                <div className="flex gap-5 ">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tourist Photo*</span>
                        </div>
                        <input {...register("image")}
                            type="text"
                            defaultValue={user?.photoURL}
                            placeholder="Photo url"
                            className="input input-bordered w-full " />

                    </label>


                    {/* price */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input {...register("price")}
                            // type="number"
                            value={price}
                            placeholder="Price"
                            className="input input-bordered w-full " />

                    </label>
                </div>

                {/* guide & date */}
                <div className="flex gap-5">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tourist Guide*</span>
                        </div>
                        <select defaultValue='default' {...register("guide")}
                            className="select select-bordered w-full ">
                            <option disabled value='default'>Select your Tour Guide</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="desserts">Desserts</option>
                            <option value="drinks">Drinks</option>

                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Select Date*</span>
                        </div>
                        <DatePicker className="border-2 p-2 w-full rounded-lg"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} />
                    </label>
                </div>
                <div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Package Name*</span>
                        </div>
                        <input {...register("packageName")}
                            // type="number"
                            value={trip_title}
                            placeholder="package"
                            className="input input-bordered w-full " />

                    </label>
                </div>

                {
                    user ? <>
                        <button className="btn w-full my-8 btn-accent text-white">
                            Book now
                        </button>
                    </> : <>
                        <button disabled className="btn w-full my-8 btn-accent text-white">
                            Book now
                        </button>
                    </>
                }
            </form>
        </div>
    );
};

export default BookingForm;