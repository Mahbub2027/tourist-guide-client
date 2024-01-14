import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const GoogleLogin = () => {
    const {googleUser} = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = ()=>{
        googleUser()
        .then(res=>{
            console.log(res.user)
            const userInfo = {
                name: res.user.displayName,
                email: res.user.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/');
            })
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="">
            <button onClick={handleGoogleLogin} 
            className="border-2 w-full p-2 rounded-lg flex flex-row gap-3 items-center justify-center font-semibold">
                <FcGoogle /> Log in with Google</button>
        </div>
    );
};

export default GoogleLogin;