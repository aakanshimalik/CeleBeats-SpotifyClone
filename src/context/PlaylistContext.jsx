import React, { createContext, useContext, useState } from 'react';

const PlaylistContext = createContext();

export const usePlaylist = () => useContext(PlaylistContext);

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState(
    JSON.parse(localStorage.getItem('myPlaylist')) || []
  );

  const addToPlaylist = (song) => {
    const updated = [...playlist, song];
    setPlaylist(updated);
    localStorage.setItem('myPlaylist', JSON.stringify(updated));
  };

  const removeFromPlaylist = (songId) => {
    const updated = playlist.filter(song => song.id !== songId);
    setPlaylist(updated);
    localStorage.setItem('myPlaylist', JSON.stringify(updated));
  };

  return (
    <PlaylistContext.Provider value={{ playlist, addToPlaylist, removeFromPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;