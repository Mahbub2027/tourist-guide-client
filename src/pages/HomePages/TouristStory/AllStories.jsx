// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AllStories = () => {
    const axiosPublic = useAxiosPublic();
    const {data: touristStory=[]} = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories')
            return res.data;
        }
    })
    return (
        <div className="w-full md:w-1/2 mx-auto my-10 grid grid-cols-1 gap-y-7">
             <Helmet>
                <title>InfiniteTour | All Stories</title>
            </Helmet>
            <h2 className="text-4xl font-semibold text-center my-8">All Stories</h2>
            
                {
                    touristStory.map(story => <Link to={`/storiesDetails/${story._id}`}
                    key={story._id}>
                        <div className="card bg-base-100  shadow-xl w-full h-72 image-full">
                            <figure><img className="w-full h-72" src={story.image} alt="img" /></figure>
                            <div className="card-body text-white">
                                
                                <p>{story.story}</p>
                                <div className="flex flex-row justify-evenly items-center">
                                    <p>Date: {story.date}</p>
                                    <p className="flex justify-end">--{story.name}</p>
                                </div>
                            </div>
                        </div>
                    </Link>)
                }
            
        </div>
    );
};

export default AllStories;