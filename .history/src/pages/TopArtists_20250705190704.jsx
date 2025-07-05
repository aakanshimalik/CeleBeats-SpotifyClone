import React from 'react';

import { Error, Loader, ArtistCard } from '../components';
import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi'; 

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopTracksQuery();


//   const songs = data?.data || [];

  if (isFetching) return <Loader title="Loading Top Charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song) => (
          <ArtistCard
            key={song.id}  
            track={song}           
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;

