import React from 'react';
import { useNavigate } from 'react-router-dom';

import defaultImage from '../assets/default-profile.jpeg;'

const ArtistCard = ({ song }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${song?.user?.id}`)}
    >
      <img alt="song_img" src={
           song?.artwork?.['480x480'] ||
           song?.artwork?.['150x150'] ||
           defaultImage
      } 
      className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {song?.user?.name || song?.user?.handle || 'Unknown Artist'}
      </p>
    </div>
  );
};

export default ArtistCard;
