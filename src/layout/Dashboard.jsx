import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen p-3 bg-slate-700 font-semibold menu text-white">
                <ul className="">
                    <h2 className="text-2xl font-semibold mt-4 mb-8">User Dashboard</h2>
                    <li><NavLink to='/dashboard/touristProfile'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/touristBooking'>My Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/touristWishlist'>My Wishlist</NavLink></li>
                </ul>

                <div className="divider divider-neutral"></div>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allPackages'>All Packages</NavLink></li>
                </ul>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;