import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import {  useGetTopTracksQuery } from '../redux/services/audiusCoreApi';

const TopPlay = () => (
  const dispatch = useDispatch();
  const {activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopTracksQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth'});
  }, []);

  const topPlays = data?.slice(0, 5);

    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
  
    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };

    return (
      <div>
        
      </div>

    )
);

export default TopPlay;
