import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";

const AdminProfile = () => {
    const { user } = useAuth();
    return (
        <div className="w-10/12 mx-auto mt-20">
             <Helmet>
                <title>InfiniteTour | Admin Profile</title>
            </Helmet>
            {/* <h2 className="text-3xl text-center">Admin Profile</h2> */}
            <div className="flex flex-col justify-center items-center">
                <img className="w-28 h-28 rounded-full" src={user?.photoURL} alt="admin" />
                <h2 className="text-3xl font-bold mt-8">{user?.displayName}</h2>
                <p>{user?.email}</p>
            </div>
        </div>
    );
};

export default AdminProfile;