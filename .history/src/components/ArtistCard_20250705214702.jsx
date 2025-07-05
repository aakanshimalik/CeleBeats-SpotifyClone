import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from "../assets/default-profile.jpeg";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/audius/artists/${track?.handle}`)}
    >
      <img alt="artist_img" src={
        track?.user?.profile_picture?.['480x480'] || defaultImage
      } 
      className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.user.name || 'Unknown Artist'}
      </p>
    </div>
  );
};

export default ArtistCard;
