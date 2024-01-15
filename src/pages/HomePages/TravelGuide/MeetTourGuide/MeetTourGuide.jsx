import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MeetTourGuide = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: guides = [] } = useQuery({
        queryKey: ['guide'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides')
            return res.data;
        }
    })
    return (
        <div className="w-10/12 mx-auto ">
            {/* <h2>Our Tour Guides {guides.length}</h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-16">
                {
                    guides.slice(0,4).map(guide => <div key={guide._id}
                        className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-28 h-28 rounded-full mx-auto" src={guide.image} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold">{guide.name}</h2>
                            <p className="">Experience: {guide.experience}</p>
                            <p className="">Contact: {guide.contact}</p>
                            <div className="card-actions justify-center">
                                <Link to={`/guideProfileDeatils/${guide._id}`}><button className="btn btn-accent mt-5">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MeetTourGuide;