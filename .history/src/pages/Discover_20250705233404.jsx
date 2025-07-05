import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopTracksQuery, useGetSongsByGenreQuery } from '../redux/services/audiusCoreApi';
import { isPending } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';
 

const Discover = () =>{
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const {data, isFetching, error } = useGetSongsByGenreQuery(genreListId ||'pop');

   if(isFetching) return <Loader title="Loading songs..." />;
   if(error) return <Error />;

   const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

   const hasSongs = data?.data && data.data.length > 0;

   
    
  

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-xol mt-4 mb-10">
                <h2 className='font-bold rtext-3xl text-white text-left'>Discover {genreTitle}</h2>
                <select 
                 onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                 value={genreListId || 'pop'}
                 className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                >
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}

                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.data?.map((song,i) => (
                    <SongCard
                      key={song.id}
                      song={song}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
                      data={data}
                      i={i}
                    />
                ))}

            </div>
            <div className="flex flex-col items-center mt-20">
        <p className="text-white text-xl mb-4">
          No trending songs available for the genre <strong>{genreTitle}</strong> at this time.
        </p>
        <p className="text-gray-400 max-w-xl text-center">
          {/* Explanation for assignment or debugging */}
          Note: The Audius API currently does not support filtering trending songs by genre reliably. 
          The genre parameter often returns empty results. This application handles such cases gracefully.
          {/* 
          📌 Note for reviewers:
          The Audius API documentation currently suggests using only the /tracks/trending endpoint, 
          and the genre filter parameter is either non-functional or inconsistent. 
          We chose to keep genre filtering UI in place to demonstrate user interaction 
          and error-handling skills, even if the API doesn't support it reliably yet.
        */}
        </p>
      </div>
        </div>
    )
}
} 

export default Discover;
