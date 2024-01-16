import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const TouristWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const {refetch, data: wishLists = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlists?email=${user.email}`)
            return res.data;
        }
    })

    const handleDeleteWishlist = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/wishlists/${id}`)
                .then(result=> {
                    // console.log(result)
                    if(result.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success" 
                          });
                    }
                })

              
            }
        })
    }

    return (
        <div className="w-11/12 mx-auto my-10">
             <Helmet>
                <title>InfiniteTour | My wishlists</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mb-10">My Wishlists</h2>
            <div className="overflow-x-auto">
                <table className="table">
                        <thead className=" text-black text-base">
                            <tr >
                                <th>
                                    #
                                </th>
                                <th>Trip Title</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                    {
                        wishLists.map((wishlist, index) => <tbody key={wishlist._id}>
                          
                            <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {wishlist.trip_title}
                                </td>
                                <td>
                                    {wishlist.price}
                                </td>
                                <td>
                                    <button className="btn btn-sm" onClick={()=>handleDeleteWishlist(wishlist._id)}><FaTrashAlt className=" text-red-500"></FaTrashAlt></button>
                                </td>
                                <th>
                                    <Link to={`/packagesDetails/${wishlist.wishId}`}><button className="btn btn-ghost btn-xs">Details</button></Link>
                                </th>
                            </tr>
                            
                        </tbody>)
                    }
                    
                    
                 

                </table>
            </div>
        </div>
    );
};

export default TouristWishlist;