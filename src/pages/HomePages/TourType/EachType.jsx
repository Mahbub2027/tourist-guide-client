import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const EachType = () => {
    const { _id, image, tour_type, trip_title, price, gallery_img_1, gallery_img_2, about_tour, tour_plan_1, tour_plan_2, tour_plan_3 } = useLoaderData();
    const [type, setType] = useState(useLoaderData);

    return (
        <div className="w-10/12 mx-auto my-10 ">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                type.map(eachTy => <div key={eachTy._id} className="card bg-base-100 shadow-xl">
                    <figure><img className="w-full h-44" src={eachTy.image} alt={eachTy.tour_type} /></figure>
                    <div className="relative card-body">
                        <div className="flex flex-row justify-between mb-10">
                            <div className="text-lg font-semibold text-left">{eachTy.trip_title}</div>
                            <div className="badge badge-secondary capitalize">{eachTy.tour_type}</div>
                        </div>
                        
                        <div className="absolute bottom-3 gap-11 flex flex-row items-center">
                            <div className=""><span className="font-bold">Price:</span> {eachTy.price}</div>
                            <Link to={`/packagesDetails/${eachTy._id}`}><div className="btn btn-accent">View Details</div></Link>
                        </div>
                    </div>
                </div>)
            }
            </div>

        </div>
    );
};

export default EachType;