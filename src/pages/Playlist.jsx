import { SongCard } from '../components';
import { usePlaylist } from '../context/PlaylistContext';
import { useSelector } from 'react-redux';
import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi';

const Playlist = () => {
     const { data, isFetching, error } = useGetTopTracksQuery();
  const { playlist, removeFromPlaylist } = usePlaylist();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const songs = data?.data || [];

  return (
    
    <div className="p-6">
   
      <h2 className="text-white text-2xl font-bold mb-4">My Playlist</h2>
      {playlist.length === 0 ? (
        <p className="text-gray-400">Your playlist is empty.</p>
      ) : (
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {playlist.map((song, index) => (
                    <div key={song.id} className="flex flex-col items-center">
                  <SongCard
                    key={song.id}             
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={songs}
                    i={index}
                    
                  />

                  <button
                     onClick={() => removeFromPlaylist(song.id)}
                    className="text-white-400 hover:text-white-600 mt-2 px-3 py-1 text-sm font-medium  bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
                   >
                      Remove
                  </button>
                  </div>
                ))}
              </div>

        // <ul className="space-y-4">
        //   {playlist.map((song, index) => (
        //     <li key={song.id || index} className="flex justify-between items-center text-white">
        //       <span>{song.title} — {song.artistName}</span>
        //       <button
        //         onClick={() => removeFromPlaylist(song.id)}
        //         className="text-red-400 hover:text-red-600"
        //       >
        //         Remove
        //       </button>
        //     </li>
        //   ))}
        // </ul>
      )}
   
    </div>
    
  );
};
export default Playlist;
