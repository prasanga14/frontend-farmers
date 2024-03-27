import React, { useEffect, useState } from 'react';
import { Post } from './';
import '../Styles/posts.scss';
import axios from 'axios';
import { BASE_URL } from '../Constants/apiUrl';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await axios.get(`${BASE_URL}api/post/all-posts`);
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
