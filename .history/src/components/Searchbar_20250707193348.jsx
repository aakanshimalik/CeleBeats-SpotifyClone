// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FiSearch } from 'react-icons/fi';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import avatar from '../assets/Aakanshi_photo.jpg'; 

// const Searchbar = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showProfile, setShowProfile] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const trimmed = searchTerm.trim();
//     if (trimmed) {
//       navigate(`/search/${encodeURIComponent(trimmed)}`);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center px-4 py-2">
//     <form
//       onSubmit={handleSubmit}
//       autoComplete="off"
//       className="p-2 text-gray-400 focus-within:text-gray-600"
//     >
//       <label htmlFor="search-field" className="sr-only">
//         Search all songs
//       </label>
//       <div className="flex flex-row justify-start items-center">
//         <FiSearch className="w-5 h-5 ml-4" />
//         <input
//           id="search-field"
//           name="search-field"
//           type="search"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
//         />
//       </div>
//     </form>
//   );
// };

// export default Searchbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../assets/Aakanshi_photo.jpg'; // make sure this path is correct

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/search/${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-2">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex items-center bg-none border-gray-700 rounded-full px-2 text-gray-400 focus-within:text-gray-600 w-full max-w-md"
      >
        <FiSearch className="w-5 h-5 ml-2" />
        <input
          id="search-field"
          name="search-field"
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-3"
        />
      </form>

      {/* Profile */}
      <div className="relative ml-6 mr-6">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-700 rounded-lg"
          onClick={() => setShowProfile(!showProfile)}
        >
          <img
            src={avatar}
            alt="user-profile"
            className="rounded-full w-12 h-12"
          />
          <p className="hidden sm:flex text-sm text-gray-300">
            Hi, <span className="font-bold ml-1">Aakanshi</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-300" />
        </div>

        {/* Dropdown Profile Info */}
        {showProfile && (
          <div className="absolute right-0 mt-2 w-58 bg-transparent border border-gray-700 text-white rounded-lg shadow-lg p-4 z-50 ">
            <div className="flex flex-col items-center">
              <img
                src={avatar}
                alt="Profile"
                className="w-30 h-20 rounded-full mb-5"
              />
              <p className="font-semibold">Aakanshi Malik</p>
              <p className="text-sm text-gray-400">aakanshimalik54@gmail.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;