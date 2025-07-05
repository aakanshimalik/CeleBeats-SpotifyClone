import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  console.log('relatedSongsData:', relatedSongsData);

  return(
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.tracks || data?.data?.tracks || [].map((song, i) => (
        <SongBar
          key={`${artistId}-${song.id}-${i}`}
          song={song}
          i={i}
          artistId={artistId || song.user?.id}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
  );
};

export default RelatedSongs;
