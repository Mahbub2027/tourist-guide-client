import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useAuth from "../../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const GuideProfileDetails = () => {
    const { name, image, skills, experience, contact, education } = useLoaderData();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [rating, setRating] = useState(0);
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const feedbackInfo = {
            rating: rating,
            email: data.email,
            feedback: data.feedback
        }
        const res = await axiosPublic.post('/feedbacks', feedbackInfo)
        console.log(res.data)
        if (res.data.insertedId) {
            reset();
            Swal.fire({
                title: 'Feedback Successfully Send',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,

            })
        }
    }


    return (
        <div className="w-10/12 mx-auto my-8">
            <h2 className="text-4xl font-bold text-center my-8"> Tour Guide Profile</h2>
            <div className="flex flex-row gap-10">
                <img className="w-32 h-32 rounded-full" src={image} alt="" />
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold">{name}</h2> <hr className="my-5" />
                    <p className="text-xl"><span className="font-semibold">Education:</span> {education}</p>
                    <p className="text-xl"><span className="font-semibold">Skills:</span> {skills}</p>
                    <p className="text-xl"><span className="font-semibold">Experience:</span> {experience}</p>
                    <p className="text-xl"><span className="font-semibold">Contact:</span> {contact}</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold mt-16 mb-5">Ratings & Reviews</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Rating */}

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Please Rate your experience</span>
                        </div>
                        <Rating style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}>

                        </Rating>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Email</span>
                        </div>
                        <input {...register("email")}
                            type="text"

                            placeholder="enter your email"
                            className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  font-semibold">Feedback</span>
                        </div>
                        <textarea {...register("feedback")}
                            className="border-2 rounded-lg"
                            placeholder="   share your experience"
                            cols="20" rows="5"></textarea>

                    </label>
                    
                    {
                        user ? <>
                            <button className=" p-3 rounded-lg w-full my-8 bg-slate-700 font-semibold text-white">
                                Send
                            </button></> :
                            <>
                                <button disabled className=" p-3 rounded-lg w-full my-8 bg-slate-200 text-black font-semibold">
                                    Send
                                </button></>
                    }
                </form>
            </div>
        </div>
    );
};

export default GuideProfileDetails;