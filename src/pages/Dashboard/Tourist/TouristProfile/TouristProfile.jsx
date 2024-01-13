import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const image_hosting_key= import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const TouristProfile = () => {
    const { user } = useAuth();
    // const [startDate, setStartDate] = useState(new Date());
    const { register,reset, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            const storyInfo = {
                name : data.name,
                title: data.title,
                story: data.story,
                // date: data.date,
                image: res.data.data.display_url
            }
            const storyRes = await axiosPublic.post('/stories', storyInfo)
            console.log(storyRes, data)
            if (storyRes.data.insertedId) {
                //
                reset();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Story is added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
    }

    return (
        <div className="w-11/12 mx-auto my-8">
            {/* <h2 className="text-3xl font-semibold text-center my-5">User Profile</h2> */}
            <div className="flex flex-col gap-7 justify-center items-center">
                <div>
                    <img className="w-24 h-24 rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-bold">{user?.displayName}</h2>
                    <h2 className="text-lg font-medium">{user?.email}</h2>
                </div>
            </div>

            {/* Share stories */}
            <h2 className="text-3xl font-semibold text-center my-10">Share your Stories</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* name */}
                
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Tourist Name*</span>
                        </div>
                        <input {...register("name")}
                            type="text"
                            defaultValue={user?.displayName}
                            placeholder="Type here"
                            className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  font-semibold">Story Title*</span>
                        </div>
                        <input {...register("title")}
                            type="text"
                            placeholder="story title"
                            className="input input-bordered w-full " />

                    </label>
                
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Story*</span>
                        </div>
                        <textarea {...register("story")}
                            type="text"
                            required
                            placeholder="share your story"
                            className="input input-bordered w-full " />

                    </label>


                    {/* photo */}
                    {/* <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Photo*</span>
                        </div>
                        <input {...register("image")}
                            placeholder="Price"
                            className="input input-bordered w-full " />
                    </label> */}
                    
                    <div className="flex items-center gap-5">
                        <div className="w-1/2">
                            <div className="label">
                                <span className="label-text font-semibold">Upload photo</span>
                            </div>
                            <input {...register('image')} type="file" className="file-input file-input-bordered w-full " />
                        </div>
               
                        {/* date */}
                        {/* <label className="form-control w-1/2 ">
                            <div className="label">
                                <span className="label-text font-semibold">Select Date*</span>
                            </div>
                            <DatePicker {...register('date')} type="number"
                            className="input input-bordered border-2 p-2 w-full rounded-lg"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)} />
                        </label> */}
                    </div>


                <button className=" p-3 rounded-lg w-full my-8 bg-slate-700 font-semibold text-white">
                            Add story
                        </button>
            </form>
        </div>
    );
};

export default TouristProfile;