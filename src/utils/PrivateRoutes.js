import { Outlet, Navigate, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AdminDashboard, Home } from '../pages';

// Component for private routes
const PrivateRoutes = () => {
  // State to store user information
  const [user, setUser] = useState(null);

  // Effect to fetch user information when component mounts
  useEffect(() => {
    const getLoggedUser = async (id) => {
      try {
        const result = await axios.get(
          `https://farmers-backend.onrender.com/api/user/u/${id}`
        );
        setUser(result.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching user:', error);
      }
    };

    getLoggedUser(localStorage.getItem('id'));
  }, []);

  // If user is still loading or not fetched, return a loading indicator
  if (!user) {
    return null;
  }

  // Check if the user is an admin
  const isAdmin = user && user.user && user.user.username === 'Admin';

  // Define routes based on user type
  const routes = [
    // Route for admin, accessible only to admins
    isAdmin ? (
      <Route key="admin" path="/admin" element={<AdminDashboard />} />
    ) : null,
    // Route for dashboard, accessible to all authenticated users
    <Route key="dashboard" path="/dashboard" element={<Home />} />,
  ];

  // Redirect logic based on user type
  if (isAdmin) {
    // Redirect to /admin for admin
    return <Navigate to={'/admin'} />;
  } else {
    // Redirect to /dashboard for regular users
    let auth = { token: localStorage.getItem('token') };
    return auth.token ? <Outlet>{routes}</Outlet> : <Navigate to={'/login'} />;
  }
};

// Export the PrivateRoutes component
export default PrivateRoutes;
