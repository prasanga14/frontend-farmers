import React, { useState } from 'react';
import '../Styles/auth.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post(`http://localhost:8000/api/user/login`, {
      email,
      password,
    });

    const username = result.data.username;

    const usernameArr = username.split(' ');

    if (result.status && !usernameArr.includes('Admin')) {
      navigate('/dashboard');
      const { id, token } = result.data;

      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
    }

    if (result.status && usernameArr.includes('Admin')) {
      navigate('/admin');
      const { id, token, username } = result.data;

      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
    }
  };

  const handleGoogleAuth = () => {};
  const handleGitHubAuth = () => {};

  return (
    <div className="app__auth login">
      <form onSubmit={handleSubmit}>
        <p className="auth__header">
          FarmersMedia <span>Login</span>
        </p>
        <div className="input__container">
          <input
            type="email"
            placeholder="Email..."
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            type="password"
            placeholder="Password..."
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="auth__action">Login</button>
        <div className="or__container">
          <div className="or__text">
            <p>OR</p>
          </div>
          <div className="or__wrapper">
            <button className="google" onClick={handleGoogleAuth}>
              Google
            </button>
            <button className="github" onClick={handleGitHubAuth}>
              Github
            </button>
          </div>
        </div>

        <p className="linkWrapper">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
