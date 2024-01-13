import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBookings = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: bookings=[], refetch} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/bookings?email=${user.email}`)
            return res.data;
        }
    })
    return [bookings, refetch]
};

export default useBookings;