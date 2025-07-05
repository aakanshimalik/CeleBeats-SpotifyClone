import React from 'react';
import { useNavigate } from 'react-router-dom';


const ArtistCard = ({ song }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/audius/artists/${artist?.handle}`)}
    >
      <img alt="artist_img" src={
        artist?.profile_picture?.['480x480'] || '/default-artist.jpeg'
           
      } 
      className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {artist?.name || 'Unknown Artist'}
      </p>
    </div>
  );
};

export default ArtistCard;
