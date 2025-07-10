import React, { createContext, useState, useContext } from 'react';

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

  return (
    <PlaylistContext.Provider value={{ playlist, addToPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default Playlist;