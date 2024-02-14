import React from 'react';
import '../Styles/share.scss';
import { user } from '../Images';
import { shareOptions } from '../Constants/dummy';

const Share = () => {
  const handlePost = () => {
    alert('This feature is currently unavailable in beta version');
  };

  return (
    <div className="share__container">
      <div className="share__top">
        <img src={user} alt="FarmersMedia profile" draggable={false} />
        <div className="input__container">
          <input type="text" placeholder="What's on your mind?" />
        </div>
      </div>
      <div className="share__bottom">
        <ul>
          {shareOptions.map((option, index) => (
            <li key={index}>
              <option.icon />
            </li>
          ))}
        </ul>
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default Share;
