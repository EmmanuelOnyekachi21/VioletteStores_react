/* React module for api calls */
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const BASEURL = 'http://127.0.0.1:8000';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem('access'); // Get the token from localStorage
      if (token) {
        const decoded = jwtDecode(token); // Decode the token
        const expiry_time = decoded.exp; // Token expiry time in seconds
        const current_time = Date.now() / 1000; // Current time in seconds

        // Check if the token isn't expired yet
        if (current_time < expiry_time) {
          config.headers.Authorization = `Bearer ${token}`; // Add the token to the request headers
        } else {
          console.warn('Token has expired.');
        }
      }
    } catch (error) {
      console.error('Error decoding token:', error.message);
      // Handle any errors that might occur during token decoding
    }

    return config; // Return the modified config object
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);
