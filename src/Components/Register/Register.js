import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const { singInWithGoogle } = useFirebase()

    return (
        <div>
            <p>Please Register</p>
            <form>
                <input type="text" name="" id="" placeholder='name' />
                <br />
                <input type="email" name="" id="" placeholder='email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Register"></input>
            </form>
        </div>
    );
};

export default Register;