import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const {googleUser} = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = ()=>{
        googleUser()
        .then(res=>{
            console.log(res.user)
            navigate('/');
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