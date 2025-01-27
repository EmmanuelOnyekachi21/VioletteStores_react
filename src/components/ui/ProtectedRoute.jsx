import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { api } from '../../api';
import Spinner from './Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isauthorized, setIsauthorized] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await auth(); // Call the auth function to check authorization
            } catch (error) {
                // In case auth fails (e.g., token refresh error), set unauthorized
                setIsauthorized(false);
            }
        };

        checkAuth(); // Call the checkAuth function inside useEffect
    }, []);

    async function refreshToken() {
        try {
            const token = localStorage.getItem("refresh");
            if (!token) {
                // If no refresh token exists, set unauthorized
                setIsauthorized(false);
                return;
            }

            const data = {
                refresh: token
            }

            // Wait for the API response
            const res = await api.post("/api/token/refresh/", data)
            if (res.status === 200) {
                // If refresh was successful, set the new access token
                localStorage.setItem('access', res.data.access);
                setIsauthorized(true);
            } else {
                setIsauthorized(false);
            }
        } catch (error) {
            console.log('Refresh error:', error.message);
            setIsauthorized(false);
        }
    }

    async function auth() {
        try {
            const token = localStorage.getItem('access');
            if (!token) {
                setIsauthorized(false);
                return;
            }
            const decoded = jwtDecode(token);
            const expiry_time = decoded.exp;
            const current_time = Date.now() / 1000;

            if (current_time < expiry_time) {
                // Token is valid
                setIsauthorized(true);
            } else {
                // Token expired, attempt to refresh it
                console.log("Refreshing Token");
                await refreshToken(); // Refresh the token
                setIsauthorized(false);
            }
        } catch (error) {
            console.error('Authorization error:', error.message);
            setIsauthorized(false); // Handle errors (e.g., invalid token)
        }
    }


    if (isauthorized === null) {
        return <Spinner />
    }

    return (
    isauthorized ? children : <Navigate to="/login" state={{ from: location }}/>
  )
}

export default ProtectedRoute;