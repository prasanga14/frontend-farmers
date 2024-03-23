import React, { useState } from 'react';
import '../Styles/auth.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:8000/api/user/register`, {
      username,
      email,
      password,
    });
    navigate('/login');

    // console.log(result);
  };

  const handleGoogleAuth = () => {};
  const handleGitHubAuth = () => {};

  return (
    <div className="app__auth register">
      <form onSubmit={handleSubmit}>
        <p className="auth__header">
          FarmersMedia <span>Register</span>
        </p>
        <div className="input__container">
          <input
            type="text"
            placeholder="Username..."
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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

        <button className="auth__action">Register</button>
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
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
