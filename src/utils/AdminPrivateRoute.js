import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AdminPrivateRoute = () => {
  const [user, setUser] = useState(null);
  console.log();

  useEffect(() => {
    const getLoggedUser = async (id) => {
      const result = await axios.get(`http://localhost:8000/api/user/u/${id}`);
      // console.log(result.data.user);
      setUser(result.data);
      // console.log('AdminPrivate: ', user);
    };

    // console.log(userId, username, profile);

    getLoggedUser(localStorage.getItem('id'));
  }, []);

  if (user) {
    let auth = user.user.username === 'Admin';
    return auth ? <Outlet /> : <Navigate to={'/login'} />;
  }

  if (!localStorage.getItem('username') === 'Admin') <Navigate to={'/login'} />;
};

export default AdminPrivateRoute;
