import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
    const { user, logOutUser } = useAuth();

    const navLinks = <>
        <li><NavLink to='/' className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 font-semibold' : ''}>Home</NavLink></li>
        <li><NavLink to='/community' className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 font-semibold' : ''}>Community</NavLink></li>
        <li><NavLink to='/blog'  className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 font-semibold' : ''}>Blog</NavLink></li>
        <li><NavLink to='/aboutUs' className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 font-semibold' : ''}>About Us</NavLink></li>
        <li><NavLink to='/contactUs' className={({isActive, isPending})=> isPending? 'pending' : isActive? 'text-red-500 font-semibold' : ''}>Contact Us</NavLink></li>
    </>

    const handleLogOut = () =>{
        logOutUser()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className=" text-2xl">TouristGuide</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-6 menu-horizontal px-1 }">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <details className="dropdown dropdown-end">
                                <summary className="m-1 btn btn-circle"><img className="w-10 h-10 rounded-full mx-2" src={user?.photoURL} alt="" /></summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li className="btn-disabled"><span>{user?.displayName}</span></li>
                                    <li className="btn-disabled"><span>{user?.email}</span></li>
                                    <hr />
                                    <li><Link>Dashboard</Link></li>
                                    <li><button onClick={handleLogOut} className=""><Link>Logout</Link></button></li> 
                                </ul>
                            </details>
                            {/* <span>{user?.displayName}</span>
                            <span><img className="w-10 h-10 rounded-full mx-2" src={user?.photoURL} alt="" /></span>
                            <button className="btn btn-secondary px-5"><Link to='/login'>Logout</Link></button> */}
                        </> :
                        <>
                            <button className="btn btn-secondary px-5"><Link to='/login'>Login</Link></button>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;