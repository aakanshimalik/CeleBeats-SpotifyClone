import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import defaultProfile from "../assets/default-profile.jpeg";

import { usePlaylist } from '../context/PlaylistContext';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();
  const {addToPlaylist} = usePlaylist();

  const handleAdd = () => {
    addToPlaylist(song);
    alert("Added song to playlist"); // Alert
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // Detect if song is from Spotify or Audius by checking presence of certain fields
  const isSpotifySong = !!song.albumCover; // your mapped Spotify songs have albumCover
  const isAudiusSong = !!song.artwork && !!song.user;

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.id === song.id ? 'flex bg-black bg-opacity-70' : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>

        <img
          alt="song_img"
          src={
            isSpotifySong
              ? song.albumCover || defaultProfile
              : isAudiusSong
              ? song.artwork['480x480'] || defaultProfile
              : defaultProfile
          }
          className="w-full h-full rounded-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultProfile;
          }}
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.id}`}>
            {isSpotifySong ? song.title : song.title || song.name}
          </Link>
        </p>

        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              isSpotifySong
                ? `/artists/${encodeURIComponent(song.artistName)}`
                : song.user
                ? `/artists/${song.user.id}`
                : '/top-artists'
            }
          >
            {isSpotifySong ? song.artistName : song.user?.name || 'Unknown Artist'}
          </Link>
        </p>
        <button
          onClick={() => handleAdd()
          }
          className="mt-2 px-3 py-2 text-sm font-medium text-white bg-green-300 hover:opacity-90 rounded-md transition-colors duration-200"
        >
          + Add to Playlist
        </button>
      </div>
    </div>
  );
};
export default SongCard;