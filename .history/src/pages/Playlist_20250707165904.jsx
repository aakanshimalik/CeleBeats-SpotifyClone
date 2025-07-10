import { usePlaylist } from '../context/PlaylistContext';

const Playlist = () => {
  const { playlist, removeFromPlaylist } = usePlaylist();

  return (
    <div className="p-6">
      <h2 className="text-white text-2xl font-bold mb-4">My Playlist</h2>
      {playlist.length === 0 ? (
        <p className="text-gray-400">Your playlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {playlist.map((song, index) => (
            <li key={song.id || index} className="flex justify-between items-center text-white">
              <span>{song.title} — {song.artistName}</span>
              <button
                onClick={() => removeFromPlaylist(song.id)}
                className="text-red-400 hover:text-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Playlist;
