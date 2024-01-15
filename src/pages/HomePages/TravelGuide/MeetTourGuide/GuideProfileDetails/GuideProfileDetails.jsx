// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import useAuth from "../../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const GuideProfileDetails = () => {
    const { name, image, skills, experience, contact, education } = useLoaderData();
    const {user} = useAuth();
    const { register,reset, handleSubmit } = useForm();
    const onSubmit = async(data) =>{
        console.log(data)
    }
    
    // const axiosPublic = useAxiosPublic();
    // const {data: guides=[]} = useQuery({
    //     queryKey: ['guide', user?._id],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get(`/tourGuides/${user._id}`)
    //         return res.data;
    //     }
    // })
    

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

            <h2 className="text-2xl font-semibold mt-16">Give feedback </h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* name */}
                
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Email</span>
                        </div>
                        <input {...register("email")}
                            type="text"
                            value={user?.email}
                            placeholder="Type here"
                            className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  font-semibold">Comment</span>
                        </div>
                        <textarea {...register("title")}  
                        className="border-2 rounded-lg"
                        cols="20" rows="5"></textarea>
                        {/* <input {...register("title")}
                            type="text"
                            placeholder="story title"
                            className="input input-bordered w-full " /> */}

                    </label>
                    {
                        user ? <>
                        <button className=" p-3 rounded-lg w-full my-8 bg-slate-700 font-semibold text-white">
                            Post
                        </button></> :
                        <>
                        <button disabled className=" p-3 rounded-lg w-full my-8 bg-slate-200 text-black font-semibold">
                            Post
                        </button></>
                    }
                </form>
            </div>
        </div>
    );
};

export default GuideProfileDetails;