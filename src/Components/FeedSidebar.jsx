import React from 'react';
import { Friends, RecentRequest } from './';
import WeatherCard from '../Components/WeatherCard';

const FeedSidebar = () => {
  return (
    <div className="home__feedsidebar">
      <WeatherCard />
      <RecentRequest />
      <Friends />
    </div>
  );
};

export default FeedSidebar;
