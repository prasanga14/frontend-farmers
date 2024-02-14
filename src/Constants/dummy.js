import {
  img1,
  img2,
  img3,
  img4,
  user,
  req1,
  req2,
  req3,
  admin,
} from '../Images';
import { BiCamera, BiImage, BiLinkAlt, BiSmile } from 'react-icons/bi';
import { SlHome } from 'react-icons/sl';
import { TiWeatherCloudy } from 'react-icons/ti';
import { MdCardMembership, MdGroups } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { BsCalendar4Event } from 'react-icons/bs';

export const sidebarRoutes = [
  {
    name: 'Home',
    path: '/dashboard',
    icon: SlHome,
  },
  {
    name: 'Weather',
    path: '/weather',
    icon: TiWeatherCloudy,
  },

  {
    name: 'Marketplace',
    path: '/marketplace',
    icon: HiOutlineShoppingBag,
  },
  {
    name: 'FarmersMedia events',
    path: '/events',
    icon: BsCalendar4Event,
  },
];

export const recentRequest = [
  {
    name: 'Shyam Lama',
    profile: req1,
  },
  {
    name: 'Hari Sharma',
    profile: req2,
  },
  {
    name: 'Bharat Nepal',
    profile: req3,
  },
];

export const shareOptions = [
  {
    icon: BiCamera,
  },
  {
    icon: BiImage,
  },
  {
    icon: BiLinkAlt,
  },
  {
    icon: BiSmile,
  },
];

export const posts = [
  {
    id: 894839543,
    img: img1,
    text: 'Crops should be well watched to maintain good production.',
    username: 'Admin',
    profile: admin,
  },
  {
    id: 894839343,
    img: img2,
    text: 'The season of rice harvesting has come.',
    username: 'Admin',
    profile: admin,
  },
  {
    id: 894839243,
    img: img3,
    username: 'Admin',
    text: 'Sarita from village kavre is working very hard',
    profile: admin,
  },
  {
    id: 894832843,
    img: img4,
    text: 'Ramesh is working hard to provide for his family',
    username: 'Admin',
    profile: admin,
  },
];

export const comments = [
  {
    id: 894839843,
    name: 'Person 1',
    comment: 'Beautiful Picture',
  },
  {
    id: 894839843,
    name: 'Person 2',
    comment: 'Great picture ',
  },
  {
    id: 894839843,
    name: 'Person 3',
    comment: 'Looking great',
  },
  {
    id: 894839843,
    name: 'Person 4',
    comment: 'Stunning',
  },
];

export const apiRoute = 'http://localhost:5000/api';
