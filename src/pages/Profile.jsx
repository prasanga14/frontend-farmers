import React from 'react';
import '../Styles/profile.scss';
import { BiLogOut, BiPencil } from 'react-icons/bi';
import { Posts, Sidebar } from '../Components';
import { cover, user } from '../Images';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {
  const id = localStorage.getItem('id');

  // Use state to manage profileName
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    const getLoggedUser = async (id) => {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/user/u/${id}`
        );
        setProfileName(result.data.user.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getLoggedUser(id);
  }, [id]);

  const randomFollowers = Math.floor(Math.random() * (600 - 250 + 1)) + 250; // 250 - 600
  const randomFollowing = Math.floor(Math.random() * (200 - 100 + 1)) + 100; // 100 - 200

  const clearLocalStorage = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  };

  return (
    <div className="app__profile">
      <Sidebar />
      <div className="profile__container">
        <div className="profile__wrapper">
          <div className="cover__container">
            <img src={cover} draggable={false} className="coverImg" alt="" />
          </div>
          <div className="profile__content">
            <img src={user} draggable={false} className="profile__img" alt="" />
          </div>
          <div className="user__profileData">
            <div className="userName">
              <h1>{profileName}</h1>
              <p>
                <span>{randomFollowers} followers</span>
                <span>{randomFollowing} following </span>
              </p>
            </div>
            <Link to={`/profile/${id}/edit`}>
              <BiPencil /> Edit Profile
            </Link>
            <Link to={'/login'} onClick={clearLocalStorage}>
              <BiLogOut /> Logout
            </Link>
          </div>
        </div>
        <div className="user__data">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
