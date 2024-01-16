import { useQuery } from "@tanstack/react-query";
import AllPackages from "./AllPackages";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const PackagesItems = () => {
    const axiosPublic = useAxiosPublic();

    const { data: packages = [] } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await axiosPublic.get('/packages')
            return res.data
        }
    })

    return (
        <div className="w-11/12 mx-auto my-12">
             <Helmet>
                <title>InfiniteTour | All Packages</title>
            </Helmet>
            {/* <h2>Packages: {packages.length}</h2> */}
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