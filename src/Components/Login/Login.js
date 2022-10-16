import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    // const { singInWithGoogle } = useFirebase()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSingn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <p>Please LogIn</p>
            {/* <button onClick={singInWithGoogle}>SignIn with google</button> */}

            {/* This system run by auth hook */}
            <button onClick={handleGoogleSingn}>SignIn with google</button>
            <form>
                <input type="email" name="" id="" placeholder='email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
};

export default Login;