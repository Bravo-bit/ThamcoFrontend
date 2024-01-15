// src/auth/Auth0Provider.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider = ({ children }) => {
    const domain = "dev-b5o6n8ohgds8cm75.us.auth0.com";
    const clientId = "V69Y4MXj3KoXlyLXXhKe5oeR2ScBQ4gk";

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            {children}
        </Auth0Provider>
    );
};

export default AuthProvider;
