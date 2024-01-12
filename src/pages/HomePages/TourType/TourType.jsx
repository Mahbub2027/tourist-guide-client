import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const TourType = () => {
    const axiosPublic = useAxiosPublic();
    const { data: tourTypes = [] } = useQuery({
        queryKey: ['types'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages`)
            return res.data;
        }
    })
    return (
        <div className="w-10/12 mx-auto my-10">
            <h2 className="text-4xl font-semibold text-center">Discover Your Perfect Journey</h2>
            <p className="text-center text-base my-2"> Explore Beauty in Hills, Beaches, Forests, and More with Our Varied Tour Offerings</p>
            <div className="flex flex-wrap justify-center gap-7">
                {
                    tourTypes.slice(0, 5).map((tourType, idx) => <Link key={idx} to={`/eachType/${tourType.tour_type}`}>
                        {/* <div className=" my-10"> */}
                        <div className="flex flex-col items-center my-10">
                            <img className="w-32 h-32 rounded-full" src={tourType?.image} alt="" />
                            <p className="capitalize my-1">{tourType.tour_type}</p>

                        </div>

                        {/* </div> */}
                    </Link>)
                }
            </div>

        </div>
    );
};

export default TourType;




{/*                 <img className="w-32 h-32 rounded-full" src="https://i.ibb.co/Y7r1pCg/Sajek-1024x600-jpg.webp" alt="Hills" />
                        <p className="my-1">Hills</p> 
                    <div className="flex flex-col items-center ">
                        <img className="w-32 h-32 rounded-full" src="https://i.ibb.co/cc64f1p/st-martin.jpg" alt="beach" />
                        <p className="my-1">Beach</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img className="w-32 h-32 rounded-full" src="https://i.ibb.co/sH8mn9D/f7b1f34b09ccb54223cace43f33ca55b.jpg" alt="advanture" />
                        <p className="my-1">Advanture</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img className="w-32 h-32 rounded-full" src="https://i.ibb.co/ZzwX98x/60ebcfe6aaa33027254823.jpg" alt="nature" />
                        <p className="my-1">Nature</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img className="w-32 h-32 rounded-full" src="https://i.ibb.co/cr5xwY5/99.jpg" alt="archaeological" />
                        <p className="my-1">Archaeological</p>
                    </div> */}