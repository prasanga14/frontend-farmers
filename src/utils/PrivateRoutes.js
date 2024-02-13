import { Outlet, Navigate } from 'react-router-dom';

const privateRoutes = () => {
  let auth = { token: localStorage.getItem('token') };

  return auth.token ? <Outlet /> : <Navigate to={'/login'} />;
};

export default privateRoutes;
