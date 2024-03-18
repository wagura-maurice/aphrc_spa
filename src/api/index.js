// src/api/index.js
import axios from 'axios';
import router from '../router';

const API_BASE_URL = 'http://localhost:8000/api/';
const apiClient = axios.create({
  baseURL: API_BASE_URL, // process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Function to get new access token using refresh token
async function refreshToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const response = await apiClient.post('token/refresh/', { refresh: refreshToken });
    localStorage.setItem('token', response.data.access);
    return response.data.access;
  } catch (error) {
    console.error("Token refresh failed:", error);
    // Token refresh failure, clear stored tokens and redirect to login
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    router.push('/login'); // Redirect to login page
    return null;
  }
}

// Request interceptor to add auth token to requests
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor to handle token refresh
apiClient.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true; // Marking request as retried
    const newAccessToken = await refreshToken();
    if (newAccessToken) {
      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      return apiClient(originalRequest); // Retrying the original request with new token
    }
  }
  // Redirect to login for all other 401 errors or if refresh fails
  if (error.response.status === 401) {
    router.push('/login');
  }
  return Promise.reject(error);
});


export default apiClient;
