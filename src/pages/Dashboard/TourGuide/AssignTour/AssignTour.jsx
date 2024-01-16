import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AssignTour = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch, data: bookings = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings');
            return res.data;
        }
    })

    const handleAccepted = book => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to accept the request!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, accept it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/bookings/accepted/${book._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Request Accepted`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })
    }
    const handleRejected = book => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to reject the request!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/bookings/rejected/${book._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Request Accepted`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })
    }


    return (
        <div className="w-11/12 mx-auto my-10">
             <Helmet>
                <title>InfiniteTour | Assign Tours</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mb-8">My Assign Tours</h2>
            {

            }
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>Package</th>
                            <th>Tourist Name</th>
                            <th>Tour Date</th>
                            <th>Price</th>
                            <th>Action</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    
                        {
                            bookings.map((book) =>
                                (user?.displayName === book.guide) && <> <tbody key={book._id}>
                                    <tr >
                                    {/* <td>{0 +1}</td> */}
                                    <td>{book.packageName}</td>
                                    <td>{book.name}</td>
                                    <td>{book.date}</td>
                                    <td>{book.price}</td>

                                    {(book.status === 'accepted' || book.status === 'rejected') ?
                                        <>
                                            <td>
                                                <button disabled onClick={() => handleAccepted(book)} className="btn btn-sm mr-10">Accept</button>
                                                <button disabled onClick={() =>handleRejected(book)} className="btn btn-sm">Reject</button>
                                            </td>
                                        </> :
                                        <>
                                            <td>
                                                <button onClick={() => handleAccepted(book)} className="btn btn-sm mr-10">Accept</button>
                                                <button onClick={()=> handleRejected(book)} className="btn btn-sm">Reject</button>
                                            </td></>
                                    }
                                </tr></tbody> </>
                            )
                    }
                </table>
            </div>
        </div>
    );
};

export default AssignTour;