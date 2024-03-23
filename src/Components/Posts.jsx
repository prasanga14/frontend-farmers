import React, { useEffect, useState } from 'react';
// import { posts } from '../Constants/dummy';
import { Post } from './';
import '../Styles/posts.scss';
import axios from 'axios';
import env from 'react-dotenv';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await axios.get(
        `https://farmers-backend.onrender.com/api/post/all-posts`
      );
      // console.log(result.data);
      setPosts(result.data);
    };

    getAllPosts();
  }, []);
  // console.log(posts);

  return (
    <div className="posts__container">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
