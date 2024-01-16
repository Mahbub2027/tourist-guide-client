import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} is admin now`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })
    }


    const handleMakeGuide = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make Tour Guide!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/guide/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} is Tour Guide now`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })
    }

    return (
        <div className="w-11/12 mx-auto my-8">
             <Helmet>
                <title>InfiniteTour | Manage Users</title>
            </Helmet>
            <h2 className="text-3xl text-center">Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <tbody key={user._id}>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="capitalize">
                                    {
                                        user.role ? user.role : 'Tourist'
                                    }
                                </td>
                                {
                                    (user?.role === 'admin' || user?.role === 'guide') ? <>
                                        <td><button disabled className="btn">Make Admin</button></td>
                                        <td><button disabled className="btn">Make Tour Guide</button></td>
                                    </>
                                        : <>
                                            <td><button onClick={() => handleMakeAdmin(user)} className="btn">Make Admin</button></td>
                                            <td><button onClick={()=> handleMakeGuide(user)} className="btn">Make Tour Guide</button></td>
                                        </>
                                }
                                
                            </tr>

                        </tbody>)
                    }

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;