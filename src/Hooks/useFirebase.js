import { useEffect, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const singInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        });
    }, []);

    return {
        user,
        singInWithGoogle,
        handleSignOut
    }
}

export default useFirebase;