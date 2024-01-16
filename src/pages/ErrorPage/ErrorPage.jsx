import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-1/3 mx-auto my-10">
            <Helmet>
                <title>InfiniteTour | Error page</title>
            </Helmet>
            <img className="w-96" src="https://i.ibb.co/3vnBhs9/oops-404-error-with-broken-robot-concept-illustration-114360-5529.jpg" alt="" />
            <p className="flex justify-center mt-10"><Link to='/'><button className="btn bg-slate-700 text-white font-semibold">Go Home</button></Link></p>
        </div>
    );
};

export default ErrorPage;