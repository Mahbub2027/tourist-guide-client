// import { useQuery } from "@tanstack/react-query";
import AllPackages from "./AllPackages";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";

const PackagesItems = () => {
    const searchRef = useRef();
    const axiosPublic = useAxiosPublic();
    const [packages, setPackages] = useState([]);

    // const { data: packages = [] } = useQuery({
    //     queryKey: ['package'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/packages')
    //         return res.data
    //     }
    // })

    useEffect(()=>{
        axiosPublic.get('/packages')
        .then(res => {
            setPackages(res.data);
        })
    },[axiosPublic])


    const handleSearch = ()=>{
        const search = searchRef?.current?.value.toLowerCase();
        console.log(search);

        const packageFilter = packages.filter((item)=> item.trip_title.toLowerCase().includes(search));
        setPackages(packageFilter);
    }

    return (
        <div className="w-11/12 mx-auto mb-12">
            <Helmet>
                <title>InfiniteTour | All Packages</title>
            </Helmet>
            {/* <h2>Packages: {packages.length}</h2> */}

            {/* ############################ */}
            <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/3y0zWJX/tea-garden.jpg)' }}>
                <div className="hero-overlay bg-opacity-50 bg-black"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold">Find Your Next Trip</h1>
                        <p className="mb-5">Discover story-worthy travel moments</p>
                        <div className="join">
                            <input type="text" ref={searchRef} defaultValue={''}
                            placeholder="tour place" className="input input-bordered join-item text-black w-80" />
                            <button onClick={handleSearch} className="btn btn-primary join-item">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ############################ */}


            <h2 className="text-center text-3xl font-bold my-10">All Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">

                {
                    packages.map(pack => <AllPackages
                        key={pack._id}
                        pack={pack}></AllPackages>)
                }

            </div>
        </div>
    );
};

export default PackagesItems;