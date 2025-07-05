import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'All', value: 'all' },
  { title: 'Pop', value: 'pop' },
  { title: 'Hip-Hop', value: 'hip-hop' },
  { title: 'Electronic', value: 'electronic' },
  { title: 'Afrobeats', value: 'afrobeats' },
  { title: 'Latin', value: 'latin' },
  { title: 'Rock', value: 'rock' },
  { title: 'R&B / Soul', value: 'r-n-b-soul' },
  { title: 'Country', value: 'country' },
  { title: 'Metal', value: 'metal' },
  { title: 'Experimental', value: 'experimental' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
