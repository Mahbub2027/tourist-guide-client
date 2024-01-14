
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllPackages = ({pack}) => {
    const {image, trip_title, tour_type, price, _id} = pack;
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    
    
    // const [packages, setPackages] = useState([])
    // useEffect(() => {
    //     fetch('packages.json')
    //         .then(res => res.json())
    //         .then(data => setPackages(data))
    // }, [])

    // const {data: packages=[]} = useQuery({
    //     queryKey: ['package'],
    //     queryFn: async () =>{
    //         const res = await axiosPublic.get('/packages')
    //         return res.data
    //     }
    // })

    const handleMyWishlist =  wishlist =>{
        if(user?.email){
            console.log(user.email, wishlist)
            const myWishlist = {
                 wishId : _id ,
                 email : user.email,
                 image,
                 tour_type,
                 trip_title,
                 price,

            }
            
            axiosPublic.post('/wishlists', myWishlist)
            .then(res=> {
                console.log(res.data);
            })
        }
    }

    return (
        <div className=" ">
            
        <div className="card h-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-40" src={image} alt="Shoes" /></figure>
                <div className="absolute right-1 top-1">
                    <button onClick={()=>handleMyWishlist(pack)} className="btn"><FaRegHeart className="w-8 h-8"></FaRegHeart></button>
        
                </div>
                <div className="relative card-body">
                    <div className="flex flex-row justify-between mb-10">
                    <div className="text-lg font-semibold text-left">{trip_title}</div>
                    <div className="badge badge-secondary capitalize">{tour_type}</div>
                </div>

                <div className="absolute bottom-3 gap-11 flex flex-row items-center">
                    <div className=""><span className="font-bold">Price:</span> {price}</div>
                        <Link to={`/packagesDetails/${_id}`}><div className="btn btn-accent">View Details</div></Link>
                </div>
                </div>
            </div>

       </div>
    )


}
export default AllPackages;