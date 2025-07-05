import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopTracksQuery, useGetSongsByGenreQuery } from '../redux/services/audiusCoreApi';
import { isPending } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';
 

const Discover = () =>{
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const {data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
   const genreTitle = "Pop";
   console.log('Audius Data:',data);

   if(isFetching) return <Loader title="Loading songs..." />;
   if(error) return <Error />;

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
                {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song,i) => ( */}
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
        </div>
    )

} 

export default Discover;
