import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [defaulBalance, setDafeultBalance] = useState(100);

    if (isLoading) {
        return <div>Please Log In to view your profile and complete your order</div>;
    }

    return (
        isAuthenticated && (
            <div className="profile-card">
                <img src={user.picture} alt={user.name} className="profile-picture" />
                <div className="profile-info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>Total Balance: ${defaulBalance}</p>
                </div>
            </div>
        )
    );
};

export default Profile;
