import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const TouristStory = () => {
    // const [touristStory, setStory] = useState([])
    const axiosPublic = useAxiosPublic();
    // useEffect(() => {
    //     fetch('story.json')
    //         .then(res => res.json())
    //         .then(data => setStory(data))
    // }, [])
    const {data: touristStory=[]} = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories')
            return res.data;
        }
    })
    return (
        <div className="w-10/12 mx-auto my-20 ">
            <h2 className="text-4xl font-bold text-center mb-14">Travel Diaries</h2>
            <div className="flex flex-col lg:flex-row gap-5">
                {
                    touristStory.slice(0, 4).map(story => <Link to={`/storiesDetails/${story._id}`}
                    key={story._id} >
                        <div className="card bg-base-100 shadow-xl image-full">
                            <figure><img className="w-72 h-52" src={story.image} alt="img" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"></h2>
                                {
                                    story.story.length > 150 ? <p>{story.story.slice(0,150)}.....</p> :
                                    <p>{story.story}</p>
                                } 
                                
                                <div className="flex justify-end">
                                    --{story.name}
                                </div>
                            </div>
                        </div>
                    </Link>)
                }


            </div>
            <div className="flex justify-center my-8">
                <Link to={`/allStories`}><button className="btn btn-accent font-bold">All Stories</button></Link>
            </div>
        </div>
    );
};

export default TouristStory;