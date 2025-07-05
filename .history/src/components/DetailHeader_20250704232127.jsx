import { Link } from 'react-router-dom';
import { useGetArtistDetailsQuery } from '../redux/services/audiusCoreApi';


const DetailHeader = ({artistId, artistData }) => {
//   const { data: artistData , isLoading, error} = useGetArtistDetailsQuery(artistId);
  console.log(artistData);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
  if (error.status === 404) {
    return <div>Song details not found.</div>;
  }

  return <div>Error loading song details.</div>;
  }

  return(
  <div className='relative w-full flex flex-col'>
    <div className='w-full bg-gradient-to-1 from-transparent to-black sm:h-45 h-28'/>

    <div className='absolute inset-0 flex items-center'>
      <img
        alt='artist'
        src={
            artistData?.profile_picture?.['480x480'] ? artistData?.profile_picture?.['480x480'] :
            artistData?.profile_picture?.['150x150']
        }
        className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'
       />
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
        {artistId ? artistData?.user?.name || artistData?.user?.handle : artistData?.title}
        {/* {songData?.title || 'Unknown Title'} */}
        </p>
        {!artistId && (
          <Link to={`/artists/${artistData?.user?.id}`}>
            <p className="text-base text-gray-400 mt-2">{artistData?.name || artistData?.handle}</p>
          </Link>
        )}

        <p className="text-base text-gray-400 mt-2">
        {artistData?.genre || 'Unknown Genre'}
        </p>
      </div>
    </div>
    <div className="w-full sm:h-44 h-24" />
  </div>
  );
};

export default DetailHeader;