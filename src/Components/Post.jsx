import React, { useState } from 'react';
import {
  BiBookmark,
  BiCommentDetail,
  BiDotsVerticalRounded,
  BiLike,
} from 'react-icons/bi';
import { ImShare } from 'react-icons/im';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import axios from 'axios';

const Post = ({ post }) => {
  const [loggedUser, setLoggedUser] = useState('');

  let showDelete;

  if (loggedUser === 'Admin') {
    showDelete = true;
  }

  const getLoggedUser = async () => {
    const user = await axios.get(
      `https://farmers-backend.onrender.com/api/user/u/${localStorage.getItem(
        'id'
      )}`
    );

    setLoggedUser(user.data.user.username);
  };

  getLoggedUser();

  const deletePost = async () => {
    const response = await axios.delete(
      `https://farmers-backend.onrender.com/api/post/delete-post/${post._id}`
    );

    console.log('Post deletion sucessfull!!!');
  };

  return (
    <div className="post__content">
      <div className="post__top">
        <div className="post__header">
          <div className="post__user">
            <img src={post.profile} alt="FarmersMedia profile" />
            <div className="post__user-infos">
              <p>{post.username}</p>
              <span>
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
          <ul className="post__options">
            <li>
              <BiBookmark />
            </li>
            <li>
              <BiDotsVerticalRounded />
            </li>
            {showDelete && (
              <li class="material-symbols-outlined" onClick={deletePost}>
                delete
              </li>
            )}
          </ul>
        </div>
        <p className="post__text">{post.text}</p>
      </div>
      <div className="post__preview">
        <Link to={`/post/${post._id}`}>
          <img
            src={`https://farmers-backend.onrender.com/images/${post.image}`}
            alt="FarmersMedia post"
          />
        </Link>
        <ul className="post__actions">
          <li>
            <BiLike /> Like <span>30</span>
          </li>
          <li>
            <BiCommentDetail /> Comment <span> {post.comments.length} </span>
          </li>
          <li>
            <ImShare /> Share <span>30</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
