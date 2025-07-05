// import { useState, useEffect } from 'react';
// import React from 'react';

// import { Error, Loader, ArtistCard } from '../components';
// import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi'; 

// const TopArtists = () => {
//   const {  isFetching, error } = useGetTopTracksQuery();

//   const [topArtists, setTopArtists] = useState([]);

//   useEffect(() => {
//     const fetchTopArtists = async () => {
//       try {
//         const res = await fetch('https://discoveryprovider.audius.co/v1/tracks/trending?time=month&limit=100');
//         const data = await res.json();

//         // Aggregate artists from trending tracks
//         const artistMap = {};
//         data.data.forEach(track => {
//           const artist = track.user;
//           if (!artistMap[artist.user_id]) {
//             artistMap[artist.user_id] = artist;
//           }
//         });

//         console.log('Unique artists count:', Object.keys(artistMap).length);

//         // Convert to array and set
//         const artists = Object.values(artistMap);
//         setTopArtists(artists);
//       } catch (error) {
//         console.error('Failed to fetch top Audius artists', error);
//       }
//     };

//     fetchTopArtists();
//   }, []);



//   if (isFetching) return <Loader title="Loading Top Charts" />;
//   if (error) return <Error />;

//   return (
//     <div className="flex flex-col">
//       <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Artists</h2>

//       <div className="flex flex-wrap sm:justify-start justify-center gap-8">
//         {/* {songs.map((song) => ( */}
//         {topArtists.map((track) => (
//           <ArtistCard
//             key={track.id}  
//             track={track}           
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopArtists;


import React from 'react';

import { ArtistCard, Error, Loader } from '../components';
import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopTracksQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.data?.map((track) => <ArtistCard key={track.id} track={track} />)}
      </div>
    </div>
  );
};

export default TopArtists;
