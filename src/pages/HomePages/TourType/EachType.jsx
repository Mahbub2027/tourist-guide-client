// import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const EachType = () => {
    // const {_id, image, tour_type, trip_title, price, gallery_img_1, gallery_img_2, about_tour, tour_plan_1, tour_plan_2, tour_plan_3 } = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const {data: packages=[]} = useQuery({
        queryKey: ['package'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/packages/tour_type/${packages.tour_type}`)
            return res.data
        }
    })
    return (
        <div className="w-11/12 mx-auto my-10 ">
            <h2 className="text-center text-3xl font-bold my-10">All Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14">
            {
                packages.map(pack => <div key={pack._id} className="card bg-base-100 shadow-xl">
                    <figure><img className="w-full h-44" src={pack.image} alt="Shoes" /></figure>
                    <div className="relative card-body">
                        <div className="flex flex-row justify-between mb-10">
                            <div className="text-lg font-semibold text-left">{pack.trip_title}</div>
                            <div className="badge badge-secondary capitalize">{pack.tour_type}</div>
                        </div>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="absolute bottom-3 gap-11 flex flex-row items-center">
                            <div className=""><span className="font-bold">Price:</span> {pack.price}</div>
                            <Link to={`/packagesDetails/${pack._id}`}><div className="btn btn-accent">View Details</div></Link>
                        </div>
                    </div>
                </div>
           )}
            </div>
        </div>
    );
};

export default EachType;