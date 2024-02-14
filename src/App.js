import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  Login,
  Register,
  Profile,
  ProfileEdit,
  Post,
  Posts,
  Weather,
} from './pages';
import PrivateRoutes from './utils/PrivateRoutes.js';
import './Styles/app.scss';

function App() {
  const theme = useSelector((state) => state.theme);

  console.log(theme);
  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
          <Route path="/weather" element={<Weather />} />
          <Route path="/events" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/edit" element={<ProfileEdit />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
