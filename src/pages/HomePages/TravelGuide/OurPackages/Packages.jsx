import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import OurPackages from "./OurPackages";
import { Link } from "react-router-dom";

const Packages = () => {
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
            {/* <h2>Packages: {packages.length}</h2> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
                {
                    packages.slice(0, 4).map(pack => <OurPackages
                        key={pack._id}
                        pack={pack}></OurPackages>)
                }
                
            </div>
            <div className=" flex justify-center my-10 ">
                    <Link to='/packageItems'><button className="btn btn-accent flex justify-center">All Packages</button></Link>
                </div>
            

        </div>
    );
};

export default Packages;