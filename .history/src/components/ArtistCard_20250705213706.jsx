import React from 'react';
import { useNavigate } from 'react-router-dom';


const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/audius/artists/${track?.handle}`)}
    >
      <img alt="artist_img" src={
        track?.profile_picture?.['480x480'] || '/assets/default-profile.jpeg'
           
      } 
      className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.name || 'Unknown Artist'}
      </p>
    </div>
  );
};

export default ArtistCard;
