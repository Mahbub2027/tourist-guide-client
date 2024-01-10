import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const PackageDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { image, tour_type, trip_title, price, gallery_img_1, gallery_img_2, about_tour, tour_plan_1, tour_plan_2, tour_plan_3 } = useLoaderData();
    // const {data: packages=[]} = useQuery({
    //     queryKey: ['package'],
    //     queryFn: async () =>{
    //         const res = await axiosPublic.get(`/packages/${packages._id}`)
    //         return res.data
    //     }
    // })

    return (
        <div>
            <p>{tour_type}</p>
            <img className="w-1/2 mx-auto h-72" src={gallery_img_1} alt="" />
            <img className="w-1/2 mx-auto h-72" src={gallery_img_2} alt="" />



        </div>
    );
};

export default PackageDetails;