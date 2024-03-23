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
import {
  potatoes,
  tomatoes,
  peas,
  guavas,
  oranges,
  cabbages,
  garlic,
  chillies,
  cauliflower,
  onions,
  karelas,
  spinach,
  greenOnion,
  apples,
} from '../marketImages';
import {
  BiCamera,
  BiFile,
  BiFileBlank,
  BiImage,
  BiLinkAlt,
  BiSmile,
} from 'react-icons/bi';
import { SlHome } from 'react-icons/sl';
import { TiWeatherCloudy } from 'react-icons/ti';
import { MdCardMembership, MdGroups, MdContactPage } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { BsCalendar4Event, BsFilePost } from 'react-icons/bs';

export const sidebarRoutes = [
  {
    name: 'Home',
    path: '/dashboard',
    icon: SlHome,
  },
  {
    name: 'Detailed Weather Info',
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
  {
    name: 'Contact Professionals',
    path: '/contactprofessional',
    icon: MdContactPage,
  },
];

export const sidebarRoutesAdmin = [
  {
    name: 'Home',
    path: '/admin',
    icon: SlHome,
  },
  {
    name: 'Detailed Weather Info',
    path: '/weather',
    icon: TiWeatherCloudy,
  },

  {
    name: 'Marketplace',
    path: '/marketplace',
    icon: HiOutlineShoppingBag,
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

export const marketItems = [
  {
    itemImage: tomatoes,
    itemName: 'Tomato',
    price: 'NRS.60 per k/g',
  },
  {
    itemImage: potatoes,
    itemName: 'Potato',
    price: 'NRS.50 per k/g',
  },
  {
    itemImage: onions,
    itemName: 'Onions',
    price: 'NRS.120 per k/g',
  },

  {
    itemImage: cauliflower,
    itemName: 'Cauli Flowers',
    price: 'NRS.120 per k/g',
  },

  {
    itemImage: oranges,
    itemName: 'Oranges',
    price: 'NRS.120 per k/g',
  },
  {
    itemImage: cabbages,
    itemName: 'Cabbages',
    price: 'NRS.120 per k/g',
  },
  {
    itemImage: apples,
    itemName: 'Apples',
    price: 'NRS.120 per k/g',
  },
  {
    itemImage: garlic,
    itemName: 'Garlic',
    price: 'NRS.120 per k/g',
  },
  {
    itemImage: chillies,
    itemName: 'Chillies',
    price: 'NRS.120 per k/g',
  },
  {
    itemImage: karelas,
    itemName: 'Karela',
    price: 'NRS.120 per k/g',
  },

  {
    itemImage: guavas,
    itemName: 'Guavas',
    price: 'NRS.100 per k/g',
  },
  {
    itemImage: peas,
    itemName: 'Peas',
    price: 'NRS.120 per k/g',
  },

  {
    itemImage: spinach,
    itemName: 'Spinach',
    price: 'NRS.120 per k/g',
  },

  {
    itemImage: greenOnion,
    itemName: 'Green Onion',
    price: 'NRS.120 per k/g',
  },
];

export const apiRoute = 'http://localhost:5000/api';
