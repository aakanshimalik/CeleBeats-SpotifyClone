import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi'; 

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopTracksQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);


  const songs = data?.data || [];

  if (isFetching) return <Loader title="Loading Top Charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            key={song.id}             
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songs}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;

