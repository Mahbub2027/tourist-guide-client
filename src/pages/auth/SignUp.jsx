import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../sharedPages/SocialLinks/GoogleLogin";

const SignUp = () => {
    const {register,handleSubmit,formState: { errors },} = useForm()
    const {createUser,updateUser} = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
        .then(res=>{
            console.log(res.user)
            // update profile
            updateUser(data.name, data.photo)
            .then(()=>{
                // send database
                navigate('/')
            })
            .catch(error=>{
                console.log(error)
            })

        })
        .catch(error=>{
            console.log(error)
        })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="w-full md:w-1/2 mr-14 text-center ">
                    <img className="w-2/3 mx-auto md:w-full" src="https://i.ibb.co/rm09PtM/2757111.webp" alt="" />
                </div>
                <div className="card shrink-0 w-full md:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                        <h2 className="text-2xl font-semibold">Create an account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be less than 20 charaterr</span>}
                                {errors.password?.type === 'pattern' && <p
                                    className="text-red-500">Password must be one capital letter, one small letter,
                                    one number & one special character</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo url" className="input input-bordered" required />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className=" btn bg-gradient-to-r from-cyan-600 to-blue-400 text-white">Register</button>
                        </div>
                        <div className="divider">Or</div>
                        <GoogleLogin></GoogleLogin>
                        {/* <div className="form-control my-2">
                            <button  className="btn btn-warning">Google</button>
                        </div> */}
                        <p>Already have an account? Please <Link to='/login' className="text-blue-600 font-semibold">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;