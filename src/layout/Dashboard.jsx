import { FaHome, FaList, FaListAlt, FaUserAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTourGuide from "../hooks/useTourGuide";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isToureGuide] = useTourGuide();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen p-3 bg-slate-700 font-semibold menu text-white">
                
                    {/* for admin */ }
                {isAdmin && <>
                    <ul className="">
                        <h2 className="text-2xl font-semibold mt-4 mb-8">Admin Dashboard</h2>
                        <li><NavLink to='/dashboard/adminProfile'> <FaUserAlt></FaUserAlt>
                            Admin Profile</NavLink></li>
                        <li><NavLink to='/dashboard/addPackage'> <FaList></FaList>
                            Add Package</NavLink></li>
                        <li><NavLink to='/dashboard/manageUsers'> <FaListAlt></FaListAlt>
                            Manage Users</NavLink></li>
                    </ul>
                </>
                }
                {/* for tour guide */}

                { isToureGuide && <>
                    <ul className="">
                        <h2 className="text-2xl font-semibold mt-4 mb-8">Tour Guide Dashboard</h2>
                        <li><NavLink to='/dashboard/guideProfile'> <FaUserAlt></FaUserAlt>
                            Tour Guide Profile</NavLink></li>
                        <li><NavLink to='/dashboard/assignTour'> <FaListAlt></FaListAlt>
                            My Assigned Tour</NavLink></li>
                    </ul>
                </>
                }
                {/* for users  */}

                {(!isAdmin  && !isToureGuide) && <>
                    <ul className="">
                        <h2 className="text-2xl font-semibold mt-4 mb-8">User Dashboard</h2>
                        <li><NavLink to='/dashboard/touristProfile'> <FaUserAlt></FaUserAlt>
                            My Profile</NavLink></li>
                        <li><NavLink to='/dashboard/touristBooking'> <FaList></FaList>
                            My Bookings</NavLink></li>
                        <li><NavLink to='/dashboard/touristWishlist'> <FaListAlt></FaListAlt>
                            My Wishlists</NavLink></li>
                    </ul>
                </>
                }
                

                <div className="divider divider-neutral"></div>
                <ul>
                    <li><NavLink to='/'> <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to='/packageItems'> <FaList></FaList>
                        All Packages</NavLink></li>
                </ul>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;