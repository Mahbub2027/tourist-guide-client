import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const GuideProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { register,reset, handleSubmit } = useForm();

    const { data } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = axiosSecure.get('/users')
            return res.data;
        }
    })

    const onSubmit = async (data) => {
        console.log(data)
        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        // if (res.data.success) {
            const storyInfo = {
                name: data.name,
                title: data.title,
                story: data.story,
                // date: data.date,
                // image: res.data.data.display_url
            }
            const storyRes = await axiosPublic.post('/tourGuide', storyInfo)
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
    


    return (
        <div className="w-10/12 mx-auto my-10">
            <div className="flex flex-col  justify-center items-center mb-4">
                <img className="w-28 h-28 rounded-full mb-8" src={user?.photoURL} alt="" />
                <h2 className="text-4xl text-center font-bold">{user?.displayName}</h2>
                <p className="text-base ">{user?.email}</p>
            </div> <hr />
                <h2 className="text-3xl font-semibold text-center mt-12">Update Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* name */}

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold">Tour Guide Name*</span>
                    </div>
                    <input {...register("name")}
                        type="text"
                        value={user?.displayName}
                        placeholder="Type here"
                        className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold">Tour Guide Image*</span>
                    </div>
                    <input {...register("image")}
                        type="text"
                        value={user?.photoURL}
                        placeholder="Type here"
                        className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text  font-semibold">Education</span>
                    </div>
                    <input {...register("education")}
                        type="text"
                        placeholder="education"
                        className="input input-bordered w-full " />

                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text  font-semibold">Skills</span>
                    </div>
                    <input {...register("skills")}
                        type="text"
                        placeholder="skills"
                        className="input input-bordered w-full " />

                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text  font-semibold">Work Experience</span>
                    </div>
                    <input {...register("experience")}
                        type="text"
                        placeholder="work experiences"
                        className="input input-bordered w-full " />

                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text  font-semibold">Contact</span>
                    </div>
                    <input {...register("contact")}
                        type="number"
                        placeholder="contact"
                        className="input input-bordered w-full " />

                </label>


                <button className=" p-3 rounded-lg w-full my-8 bg-slate-700 font-semibold text-white">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default GuideProfile;