import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../sharedPages/SocialLinks/GoogleLogin";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {loginUser} = useAuth();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(res=>{
            console.log(res.user)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/')

        })
        .catch(error=>{
            console.log(error)
        })
    }

    // const handleGoogleLogin = () =>{
    //     //
    // }
    return (
        <div className="hero min-h-screen bg-base-200">
             <Helmet>
                <title>InfiniteTour | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="w-full md:w-1/2 mr-14 text-center ">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                    {/* <img src="https://i.ibb.co/DQ0Dczh/access-control-system-abstract-concept-335657-3180.jpg" alt="" /> */}
                    <img className="w-2/3 mx-auto md:w-full" src="https://i.ibb.co/rm09PtM/2757111.webp" alt="" />
                </div>
                <div className="card shrink-0 w-full md:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100">
                    
                    <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-2xl font-semibold">Welcome Back</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-cyan-600 to-blue-400 text-white">Continue</button>
                        </div>
                        <div className="divider">Or</div>
                        <GoogleLogin></GoogleLogin>
                        {/* <div className="form-control mt-2">
                            <button onClick={handleGoogleLogin} className="btn btn-warning">Google</button>
                        </div> */}
                        <p>New here? Please <Link to='/signup' className="text-blue-600 font-semibold">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;