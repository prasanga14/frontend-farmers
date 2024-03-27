import React from 'react';
import '../Styles/navbar.scss';
import { HiBell } from 'react-icons/hi2';
import { AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { user } from '../Images';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Constants/apiUrl';

const Navbar = () => {
  const id = localStorage.getItem('id');

  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    const getLoggedUser = async (id) => {
      try {
        const result = await axios.get(`${BASE_URL}api/user/u/${id}`);
        setProfileName(result.data.user.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getLoggedUser(id);
  }, [id]);

  return (
    <div className="app__navbar">
      <div className="left__navbar">
        <div className="name">
          <p>Home</p>
        </div>
        <ul>
          <li>Explore</li>
          <li>Weather Data</li>
          <li>Mutual friends</li>
        </ul>
      </div>
      <div className="right__navbar">
        <ul>
          <li>
            <AiFillMessage />
          </li>
          <li>
            <HiBell />
          </li>
        </ul>
        <div className="userContent">
          <Link to={`/profile/${id}`}>
            <p>{profileName}</p>
            <img src={user} alt="FarmersMedia profile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
