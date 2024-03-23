import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/makePost.scss';
import { useNavigate } from 'react-router-dom';

const MakePost = () => {
  const [userId, setUserId] = useState('');
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [profile, setProfile] = useState('');
  const navigate = useNavigate();

  const id = localStorage.getItem('id');

  const getLoggedUser = async (id) => {
    const result = await axios.get(
      `https://farmers-backend.onrender.com/api/user/u/${id}`
    );
    // console.log(result.data.user);
    setUserId(result.data.user._id);
    setUsername(result.data.user.username);
    setProfile(result.data.user.profilePicture);
  };

  // console.log(userId, username, profile);

  getLoggedUser(id);

  async function submitImage(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('image', image);

    const result = await axios.post(
      `https://farmers-backend.onrender.com/api/post/upload-image`,
      { userId, username, image, text, profile },
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    console.log(result.data.post._id);
    console.log(image);

    // localStorage.setItem(`postId`, result.data.post._id);
    navigate('/admin');
  }

  function onInputChange(e) {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  return (
    <div className="make_post_home">
      <form onSubmit={submitImage}>
        <h1 className="heading__primary__post">Create Post for Users</h1>
        <input
          type="text"
          placeholder="Enter post title ... "
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="file"
          className="file__input"
          name="image"
          id="browse"
          onChange={onInputChange}
        />

        <button type="submit" className="post__btn">
          Post
        </button>
      </form>
    </div>
  );
};

export default MakePost;
