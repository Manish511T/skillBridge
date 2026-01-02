import React from 'react'
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
    const { token, user } = useAuth();

    if (!token) return <Navigate to="/login" />;

    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/" />
    }
    return children;
};

export default ProtectedRoute;