import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTourGuide = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isToureGuide} = useQuery({
        queryKey: ['isTourGuide', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/guide/${user.email}`);
            console.log(res.data)
            return res.data?.guide;
        }
    })
    return [isToureGuide]
};

export default useTourGuide;