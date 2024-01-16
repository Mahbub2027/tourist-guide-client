import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddPackage = () => {
    const { register, reset, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const packageInfo = {
            trip_title: data.trip_title,
            tour_type : data.tour_type,
            image : data.image,
            price : data.price,
            about_tour  : data.about_tour,
            gallery_img_1 : data.gallery_img_1,
            gallery_img_2 : data.gallery_img_2,
            tour_plan_1 : data.tour_plan_1,
            tour_plan_2 : data.tour_plan_2,
            tour_plan_3 : data.tour_plan_3,
        }
        const packageRes = await axiosSecure.post('/packages', packageInfo)
        console.log(packageRes, data)
        if(packageRes.data.insertedId){
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Package added successfully`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        
    }
    return (
        <div className="w-11/12 mx-auto my-10">
             <Helmet>
                <title>InfiniteTour | Add Package</title>
            </Helmet>
            <h2 className="text-3xl text-center font-semibold mb-10">Add package</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* trip title */}

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Trip Title</span>
                        </div>
                        <input {...register("trip_title")}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  font-semibold">Photo Url</span>
                        </div>
                        <input {...register("image")}
                            type="text"
                            placeholder="photo url"
                            className="input input-bordered w-full " />
                    </label>
                    {/* type & price */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Tour Type</span>
                            </div>
                            <select defaultValue='default' {...register("tour_type")}
                                className="select select-bordered w-full ">
                                <option disabled value='default'>Select tour type</option>
                                <option value="hills">Hills</option>
                                <option value="nature">Nature</option>
                                <option value="beach">Beach</option>
                                <option value="adventure">Adventure</option>
                                <option value="archeological">Archeological</option>
                            </select>
                            {/* <input {...register("tour_type")}
                                type="text"
                                required
                                placeholder="eg: hills,nature,beach,adventure"
                                className="input input-bordered w-full " /> */}
                        </label>

                        {/* price */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Package Price</span>
                            </div>
                            <input {...register("price")}
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* about tour */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">About tour</span>
                        </div>
                        <textarea {...register("about_tour")} placeholder="about tour"
                            className="border-2 rounded-lg" rows='3'>
                        </textarea>
                        {/* <input {...register("about_tour")}
                            placeholder="Price"
                            className="input input-bordered w-full " /> */}
                    </label>

                    <div className="flex flex-col md:flex-row gap-3">
                        {/* gallery img 1 */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text  font-semibold">Gallery photo 1</span>
                            </div>
                            <input {...register("gallery_img_1")}
                                type="text"
                                placeholder="photo url"
                                className="input input-bordered w-full " />
                        </label>
                        {/* gallery img 2 */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text  font-semibold">Gallery photo 2</span>
                            </div>
                            <input {...register("gallery_img_2")}
                                type="text"
                                placeholder="photo url"
                                className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* tour plan 1 */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Tour Plan 1</span>
                        </div>
                        <textarea {...register("tour_plan_1")} placeholder="    tour plan"
                            className="border-2 rounded-lg" rows='3'>
                        </textarea>
                    </label>

                    {/* tour plan 2 */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Tour Plan 2</span>
                        </div>
                        <textarea {...register("tour_plan_2")} placeholder="    tour plan"
                            className="border-2 rounded-lg" rows='3'>
                        </textarea>
                    </label>

                    {/* tour plan 3 */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Tour Plan 3</span>
                        </div>
                        <textarea {...register("tour_plan_3")} placeholder="    tour plan 3"
                            className="border-2 rounded-lg" rows='3'>
                        </textarea>
                    </label>


                    {/* image file */}
                    {/* <div className="flex items-center gap-5">
                        <div className="w-1/2">
                            <div className="label">
                                <span className="label-text font-semibold">Upload photo</span>
                            </div>
                            <input {...register('image')} type="file" className="file-input file-input-bordered w-full " />
                        </div>

                    </div> */}


                    <button className=" p-3 rounded-lg w-full my-8 bg-slate-700 font-semibold text-white">
                        Add package
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;