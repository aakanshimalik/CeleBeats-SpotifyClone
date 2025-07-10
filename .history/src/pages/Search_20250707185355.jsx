import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Error, Loader, SongCard } from '../components';

import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi';
import avatar from '../assets/Aakanshi_photo.jpg';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopTracksQuery();

  const filteredSongs = data?.data?.filter((song) =>
    song.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (section) => {
    // Your profile dropdown or modal logic can go here
    console.log(`Clicked: ${section}`);
  };

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end items-center mt-4 mb-4">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p className="hidden sm:flex">
              <span className="text-gray-400 text-sm">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-sm">
                Aakanshi
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-sm" />
          </div>
        </TooltipComponent>
        </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {filteredSongs?.length ? (
          filteredSongs.map((song, i) => (
            <SongCard
              key={song.id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={filteredSongs}
              i={i}
            />
          ))
        ) : (
          <p className="text-white">No results found.</p>
        )}
      </div>
    </div>
  );
};
export default Search;
