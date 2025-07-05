import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/audiusCoreApi';

const SongDetails = () => {
    const dispatch = useDispatch();
    const {songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

     console.log(songid);

    <div className="flex flex-col">
        <DetailsHeader artistId={artistId} songData={songData}/>
    </div>;
}

export default SongDetails;
