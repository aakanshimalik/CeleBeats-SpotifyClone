import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi';

const TopCharts = () => {
   
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: countryData, isFetching, error } = useGetTopTracksQuery();
    // const { data: globalSongs } = useGetTopChartsQuery(); // used this as backup

    // const songs = countryData?.data?.length ? countryData.data : globalSongs?.data || [];

    // console.log(country);

    
      if (isFetching && loading) return <Loader title="Loading top charts..." />;

      if (error) return <Error />;

  return(
    <div className='flex flex-col'>
       <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover top charts</h2>
       {/* Fallback message if no country songs are available */}
       {/* {data?.length === 0 && (
       <p className="text-gray-400 italic mt-2 text-center">
            No regional content found for your country. Showing trending songs worldwide instead.
        </p>
        )} */}
       <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
           {data?.data?.map((song,i) => (
            <SongCard
              key={song.id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={songs}
               i= {i}                                             
            />
           ))}
       </div>
    </div>
  );
};

export default TopCharts;

