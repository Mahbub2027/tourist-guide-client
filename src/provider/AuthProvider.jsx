import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (name, photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleUser = ()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                const authInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', authInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else {
                localStorage.removeItem('access-token');
            }
            // console.log("current user", currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[axiosPublic])

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleUser,
        updateUser,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;