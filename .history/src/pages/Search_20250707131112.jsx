import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import { useSearchTracksQuery } from '../redux/services/spotifyWebApi';


const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useSearchTracksQuery(searchTerm);
  console.log("First Song:", songs[0]);


  const songs = data?.tracks?.items || [];

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((track, i) => (
          <SongCard
            key={track.id}
            song={{
              id: track.id,
              title: track.name,
              artistName: track.artists[0]?.name || 'Unknown Artist',
              albumCover: track.album?.images[0]?.url || '',
              durationMs: track.duration_ms,
             
            }}
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

export default Search;
