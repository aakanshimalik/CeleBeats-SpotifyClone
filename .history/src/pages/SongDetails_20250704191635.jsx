import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/audiusCoreApi';

const SongDetails = () => {
    const dispatch = useDispatch();
    const {songid , id: artistId} = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
   
    const { data: songDetailsData, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });
    const songData = songDetailsData?.data;

    const [lyrics, setLyrics] = useState('');
    

    useEffect(() => {
        if (songData?.title && songData?.user) {
          const artist = encodeURIComponent(songData.user.name || songData.user.handle);
          const title = encodeURIComponent(songData.title);
    
          // Fetch lyrics from lyrics.ovh

          fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.lyrics) {
                setLyrics(data.lyrics);
              } else {
                setLyrics('Lyrics not found.');
              }
            })
            .catch(() => setLyrics('Lyrics not found.'));
        }
      }, [songData]);
    
      if (isFetchingRelatedSongs) return <p className="text-white">Loading song...</p>;
      if (error || !songData) return <p className="text-white">Error loading song details.</p>;

     console.log(songid);
     console.log(songData);
     console.log(error);
  return (
    <div className="flex flex-col">
        <DetailsHeader artistId={songData?.user?.id} songData={songData} />

        <div className='mb-10'>
            <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>

            <div className='mt-5'>
                {lyrics
                ? lyrics.split('\n').map((line, index) => (
                  <p key={index} className="text-gray-300">{line}</p>
                ))
                :  (
                <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
               )}

            </div>
        </div>

        <RelatedSongs
          data={songDetailsData?.tracks || songDetailsData }  // Audius related tracks may be nested in `tracks`
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
    </div>
  );
}

export default SongDetails;
