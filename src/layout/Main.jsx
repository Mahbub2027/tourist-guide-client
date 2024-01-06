import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar/Navbar";
import Footer from "../pages/sharedPages/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const navBarFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {navBarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {navBarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;