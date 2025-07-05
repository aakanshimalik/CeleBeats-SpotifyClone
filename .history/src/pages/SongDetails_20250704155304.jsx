import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/audiusCoreApi';

const SongDetails = () => {
    const dispatch = useDispatch();
    const {songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
   

    const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });

    // const { isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
 

    const [lyrics, setLyrics] = useState('');
    const songData = data?.data?.[0];

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
    
      if (isFetchinRelatedSongs) return <p className="text-white">Loading song...</p>;
      if (error || !songData) return <p className="text-white">Error loading song details.</p>;

     console.log(songid);
     console.log(songData);
     console.log(error);

    <div className="flex flex-col">
        <DetailsHeader artistId={artistId} songData={songData}/>

        <div className='mb-10'>
            <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>

            <div className='mt-5'>
               {/* {songData?.sections[1].type === 'LYRICS'
                ? songData?.sections[1]?.text.map((line, i) => (
                 <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
                )) */}
                {lyrics
                ? lyrics.split('\n').map((line, index) => (
                  <p key={index} className="text-gray-300">{line}</p>
                ))
                :  (
                <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
               )}

            </div>
        </div>
    </div>
}

export default SongDetails;
