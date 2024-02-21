import React from 'react';
import { useState, useEffect } from 'react';
// import { comments /*posts */ } from '../Constants/dummy';
import { ImShare } from 'react-icons/im';
import { user } from '../Images';
import { Link } from 'react-router-dom';
import '../Styles/postwrapper.scss';
import axios from 'axios';
import {
  BiCommentDetail,
  BiDotsHorizontalRounded,
  BiLike,
  BiSmile,
} from 'react-icons/bi';

const PostWrapper = () => {
  const [post, setPost] = useState({});
  const [loggedUser, setLoggedUser] = useState({});
  const [currPostId, setCurrPostId] = useState('');
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getLoggedUser = async (id) => {
      try {
        const result = await axios.get(
          `https://farmers-backend.onrender.com/api/user/u/${id}`
        );
        setLoggedUser(result.data.user);
      } catch (error) {
        console.error('Error fetching logged user:', error);
      }
    };

    getLoggedUser(localStorage.getItem('id'));
  }, []);

  useEffect(() => {
    const currentUrl = window.location.href;
    const idStartIndex = currentUrl.lastIndexOf('/') + 1;
    const postId = currentUrl.substring(idStartIndex);
    setCurrPostId(postId);
  }, []);

  useEffect(() => {
    const getSinglePost = async (postId) => {
      try {
        const result = await axios.get(
          `https://farmers-backend.onrender.com/api/post/single-post/${postId}`
        );
        setPost(result.data);
        setComments(result.data.comments || []);
      } catch (error) {
        console.error('Error fetching single post:', error);
      }
    };

    if (currPostId) {
      getSinglePost(currPostId);
    }
  }, [currPostId]);

  const handlePostComment = async (e) => {
    e.preventDefault();

    const newUserComment = {
      commentId: new Date().getUTCMilliseconds(),
      comment: userComment,
      name: loggedUser.username,
    };

    if (!userComment) return;

    try {
      await axios.post(
        `https://farmers-backend.onrender.com/api/post/add-comment/${currPostId}`,
        {
          comment: newUserComment,
        }
      );

      setComments([...comments, newUserComment]);
      setUserComment(() => '');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      if (
        comments.some(
          (comment) =>
            comment.commentId === commentId &&
            comment.name === loggedUser.username
        )
      ) {
        await axios.delete(
          `https://farmers-backend.onrender.com/api/post/delete-comment/${currPostId}/${commentId}`
        );
        setComments(
          comments.filter((comment) => comment.commentId !== commentId)
        );
      } else {
        console.log('You are not allowed to delete this comment.');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="post__wrapper">
      <div className="post__wrapper__container">
        <div className="post__img">
          <img
            src={`https://farmers-backend.onrender.com/images/${post.image}`}
            alt=""
          />
        </div>
        <div className="post__wrapper__content">
          <div className="user__post">
            <Link to={`/profile/${post._id}`} className="user__profile">
              <img src={loggedUser.profilePicture} alt="" />
              <p>{loggedUser.username}</p>
            </Link>
            <BiDotsHorizontalRounded />
          </div>

          <div className="post__content">
            <p className="post__text">{post.text}</p>
            <div className="comment__container">
              {comments && comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div className="comment" key={index}>
                    <Link to={`/profile/55`} className="profile">
                      <img src={user} alt="" />
                    </Link>
                    <p>
                      <b className="comment__name">{comment.name} </b>
                      <span>{comment.comment}</span>
                    </p>

                    {comment.name === loggedUser.username && (
                      <span
                        onClick={() => handleDeleteComment(comment.commentId)}
                        className="material-symbols-outlined deleteIcon"
                      >
                        delete
                      </span>
                    )}
                  </div>
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </div>
          </div>

          <div className="post__actions">
            <ul className="post__action__wrapper">
              <li>
                <BiLike /> Liked <span>30</span>{' '}
              </li>
              <li>
                <BiCommentDetail />
                Comment <span> {comments.length} </span>{' '}
              </li>
              <li>
                <ImShare /> Share <span>30</span>{' '}
              </li>
            </ul>

            <div className="add__comment">
              <BiSmile />
              <input
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                type="text"
                placeholder="Add a comment..."
                name="inputComment"
              />
              <button onClick={handlePostComment}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWrapper;
