import { useQuery } from "@tanstack/react-query";
// import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const StoryDetails = () => {
    const { name, title, image, story, date } = useLoaderData();
    // const axiosPublic = useAxiosPublic();
    // const {data: touristStory=[]} = useQuery({
    //     queryKey: ['stories', touristStory?._id],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/stories/${touristStory._id}`)
    //         return res.data;
    //     }
    // })
    return (
        <div>
            <figure><img className="w-full h-[420px]" src={image} alt="" /></figure>
            <div className="w-10/12 mx-auto my-10 space-y-5">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-lg">{story}</p>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <i>Date: {date}</i>
                    <h2 className="font-bold italic">--{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;