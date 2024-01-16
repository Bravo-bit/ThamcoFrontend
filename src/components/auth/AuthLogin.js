import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
const AuthLogin = () => {
    const { loginWithRedirect } = useAuth0();

    return <NavLink onClick={() => loginWithRedirect()}>Log In</NavLink>;
};

export default AuthLogin;
