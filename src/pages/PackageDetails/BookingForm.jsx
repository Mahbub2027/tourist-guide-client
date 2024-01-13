// import { useState } from "react";
// import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const BookingForm = () => {
    const axiosPublic = useAxiosPublic();
    const { price, trip_title } = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    // const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const bookingInfo = {
            name: data.name,
            email: data.email,
            image: data.image,
            price: data.price,
            guide: data.guide,
            date: data.date,
            packageName: data.packageName,
        }
        axiosPublic.post('/bookings', bookingInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    // refetch()
                    Swal.fire({
                        // title: "Are you sure?",
                        text: "Confirm your booking!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, book it!"
                    }).then((result) => {
                     if (result.isConfirmed) {
                        navigate('/dashboard/touristBooking')
                     }})
                   
                    // .then((result) => {
                    //     if (result.isConfirmed) {

                    //                     refetch();
                    //                     Swal.fire({
                    //                         title: "Booked",
                    //                         text: "Booking Successfull",
                    //                         icon: "success"
                    //                     });

                    //                 }
                    //             });

                    // Swal.fire({
                    //     position: "top",
                    //     icon: "success",
                    //     title: "Booking Successfull",
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // });
                    // refetch the cart 

                }
                
            });
           
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
                            value={user?.displayName}
                            placeholder="Type here"
                            className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Tourist email*</span>
                        </div>
                        <input {...register("email")}
                            type="text"
                            value={user?.email}
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
                            value={user?.photoURL}
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
                            <option value="sakib">Sakib</option>
                            <option value="mahfuz">Mahfuz</option>
                            <option value="abid">Abid</option>
                            <option value="tahmid">Tahmid</option>


                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Select Date*</span>
                        </div>
                        <input {...register("date")} type="date" className="input input-bordered w-full" />
                        {/* <ReactDatePicker type='date' {...register('date')}
                        className="border-2 p-2 input w-full rounded-lg"
                            selected={startDate} 
                            onSelect={}
                            onChange={(date) => setStartDate(date)} /> */}
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