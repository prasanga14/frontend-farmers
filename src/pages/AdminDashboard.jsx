import React from 'react';
import '../Styles/home.scss';
import {
  Navbar,
  AdminSidebar,
  FeedSidebar,
  HomeLoader,
  Posts,
  Share,
} from '../Components';
import MakePost from './MakePost';

const AdminDashboard = () => {
  return (
    <div className="app__home">
      <AdminSidebar />
      <div className="home__container">
        <Navbar />
        <div className="home__content">
          <div className="posts__wrapper__container">
            <MakePost />
            {/* <Share /> */}
            <Posts />
          </div>
          <FeedSidebar />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
