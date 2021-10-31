import React from 'react';

import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })

            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <h2 className="mt-5">Please Login/ Sign Up via Google</h2>
            <button className="btn btn-dark mb-5 p-3 mt-5" onClick={handleGoogleLogin}>
                Sign In</button>
        </div>
    );
};

export default Login;