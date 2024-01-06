import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

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