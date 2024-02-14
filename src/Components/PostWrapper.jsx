import React from 'react';
import { posts } from '../Constants/dummy';
import { ImShare } from 'react-icons/im';
import { user } from '../Images';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Styles/postwrapper.scss';
import {
  BiCommentDetail,
  BiDotsHorizontalRounded,
  BiLike,
  BiSmile,
} from 'react-icons/bi';
import axios from 'axios';

const id = localStorage.getItem('id');

const PostWrapper = () => {
  const [loggedUser, setLoggedUser] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleAddComment = async () => {
    const result = await axios.post('http://localhost:8000/api/user/comments', {
      name: loggedUser.username,
      comment,
    });

    setAllComments([...allComments, result.data.comment]);
    console.log(result.data.comment.comment);
    setComment('');
  };

  const location = useLocation();

  const pathname = location.pathname.split('/')[2];
  const post = posts.find((post) => post.id.toString() === pathname);

  useEffect(() => {
    const getLoggedUser = async (id) => {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/user/u/${id}`
        );
        setLoggedUser(result.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getLoggedUser(id);
  }, [id]);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/user/comments`
        );
        setAllComments(result.data);
        // console.log(result.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getAllComments();
  }, []);

  return (
    <div className="post__wrapper">
      <div className="post__wrapper__container">
        <div className="post__img">
          <img src={post.img} alt="" />
        </div>
        <div className="post__wrapper__content">
          <div className="user__post">
            <Link to="/profile/2222" className="user__profile">
              <img src={post.profile} alt="" />
              <p>{post.username}</p>
            </Link>
            <BiDotsHorizontalRounded />
          </div>

          <div className="post__content">
            <p className="post__text">Checking on the growth of the crops.</p>
            <div className="comment__container">
              {allComments.map((comment, index) => (
                <div className="comment" key={index}>
                  <Link to={`/profile/${id}`} className="profile">
                    <img src={user} alt="" />
                  </Link>
                  <p>
                    <b className="comment__name">
                      {comment.name} {'  '}{' '}
                    </b>
                    <span>{comment.comment}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="post__actions">
            <ul className="post__action__wrapper">
              <li>
                <BiLike /> Liked <span>30</span>{' '}
              </li>
              <li>
                <BiCommentDetail />
                Comment <span>30</span>{' '}
              </li>
              <li>
                <ImShare /> Share <span>30</span>{' '}
              </li>
            </ul>

            <div className="add__comment">
              <BiSmile />
              <input
                type="text"
                placeholder="Add a comment..."
                name="inputComment"
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={(e) => handleAddComment(e)}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWrapper;
