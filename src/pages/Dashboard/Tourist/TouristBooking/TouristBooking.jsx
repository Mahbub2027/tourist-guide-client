
import Swal from "sweetalert2";
import useBookings from "../../../../hooks/useBookings";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TouristBooking = () => {
    const [bookings, refetch] = useBookings();
    const axiosSecure = useAxiosSecure();

    const handleBookingCancel = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/bookings/${id}`)
                .then(result=> {
                    // console.log(result)
                    if(result.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Canceled!",
                            text: "Your file has been Canceled.",
                            icon: "success" 
                          });
                    }
                })

              
            }
          });
    }
    return (
        <div className="w-11/12 mx-auto my-8">
            <h2 className="text-3xl font-bold text-center my-8">My Bookings {bookings.length}</h2>
            {/* head */}
            <div  className="overflow-x-auto">
                <table className="table">
            <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Package</th>
                            <th>Guide Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Cancel</th>
                            <th>Pay</th>
                            <th>Apply</th>
                            
                        </tr>
                    </thead>

            {
                bookings.map((book, index) =><tbody key={book._id}>
                        {/* row 1 */}
                        <tr >
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                {book.packageName}
                            </td>
                            <td>
                                {book.guide}
                            </td>
                            <td>
                                {book.date}
                            </td>
                            <td>
                                {book.price}
                            </td>
                            <td>
                                {"In Review"}
                            </td>
                            <td>
                                <button onClick={()=>handleBookingCancel(book._id)} className="btn">Cancel</button>
                            </td>
                            
                            <td>
                                <button className="btn">Pay</button>
                            </td>
                            <td>
                                {
                                    (index+1).length > 3  ? <><button className="btn">Apply</button></> :
                                    <button disabled className="btn">Apply</button>
                                }
                                
                            </td>
                            {/* <th>
                                Pay
                            </th> */}
                        </tr>
                        
                    </tbody>       
            )
            }
            </table>
             </div>
        </div>
    );
};

export default TouristBooking;