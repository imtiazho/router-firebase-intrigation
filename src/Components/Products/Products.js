import React from 'react';
import { getAuth } from 'firebase/auth';
import useFirebase from '../../Hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app)

const Products = () => {
    // const { user } = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is Products</h1>
            <p>Name: {user ? user.displayName : "No Name"}</p>
        </div>
    );
};

export default Products;