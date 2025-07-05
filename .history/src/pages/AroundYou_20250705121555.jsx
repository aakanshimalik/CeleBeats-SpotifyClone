import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/audiusCoreApi';

const CountryTracks = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    console.log(country);

      useEffect(() => {
        axios
          .get(`https://geo.ipify.org/api/v2/country?apiKey=at_YhayVf9mhIwTMY72XIKK8N2w2eo2w`)
          .then((res) => setCountry(res?.data?.location.country))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, [country]);

      if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

      if (error && country !== '') return <Error />;

  return(
    <div className='flex flex-col'>
       <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You</h2>

       <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
           {data?.data?.map((song,i) => (
            <SongCard
              key={song.id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
               i= {i}                                             
            />
           ))}
       </div>
    </div>
  );
};

export default CountryTracks;
