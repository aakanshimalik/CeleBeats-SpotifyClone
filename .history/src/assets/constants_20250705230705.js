import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  // { title: 'Pop', value: 'pop' },
  // { title: 'Hip-Hop', value: 'hip_hop' },
  // { title: 'Dance', value: 'DANCE' },
  // { title: 'Electronic', value: 'ELECTRONIC' },
  // { title: 'Soul', value: 'SOUL_RNB' },
  // { title: 'Alternative', value: 'ALTERNATIVE' },
  // { title: 'Rock', value: 'ROCK' },
  // { title: 'Latin', value: 'LATIN' },
  // { title: 'Film', value: 'FILM_TV' },
  // { title: 'Country', value: 'COUNTRY' },
  // { title: 'Worldwide', value: 'WORLDWIDE' },
  // { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  // { title: 'House', value: 'HOUSE' },
  // { title: 'K-Pop', value: 'K_POP' },
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
