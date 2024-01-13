import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { FaRegHeart } from "react-icons/fa";
// import { useState } from "react";

const OurPackages = () => {

    const axiosPublic = useAxiosPublic();

    const {data: packages=[]} = useQuery({
        queryKey: ['package'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/packages')
            return res.data
        }
    })

    const handleMyWishlist = id =>{
        const {image, title, tour_type, price} = id;
        console.log("my wishlist", id)
        const myWishlist = {
            //
        }
        
    }

    return (
        <div className="w-11/12 mx-auto my-12">
            {/* <h2>Our Packages {packages.length}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                packages.slice(0,4).map(pack=> <div key={pack._id} className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-44" src={pack.image} alt="Shoes" /></figure>
                <div className="absolute right-1 top-1">
                        <button onClick={()=>handleMyWishlist(pack._id)} className="btn"><FaRegHeart className="w-8 h-8"></FaRegHeart></button>
                        {/* {showHeartIcons ? {showHeartIcons?<FaHeart className="w-8 h-8" /> :   : <FaRegHeart></FaRegHeart>} */}
                </div>
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
                </div>)
            }
                
            </div>
            <div className=" flex justify-center my-10 ">
                    <Link to='/allPackages'><button className="btn btn-accent flex justify-center">All Packages</button></Link>
            </div>
        </div>
    );
};

export default OurPackages;