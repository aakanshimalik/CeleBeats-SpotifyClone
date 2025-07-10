import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
// import { useSearchTracksQuery } from '../redux/services/spotifyWebApi';


// const Search = () => {
//   const { searchTerm } = useParams();
//   const { activeSong, isPlaying } = useSelector((state) => state.player);
//   const { data, isFetching, error } = useSearchTracksQuery(searchTerm);
//   console.log("search mounted");


//   const songs = data?.tracks?.items || [];

//   if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

//   if (error) return <Error />;
//   useEffect(() => {
//     console.log('Search term:', searchTerm);
//     console.log('Spotify API data:', data);
//     console.log('Spotify API error:', error);
//   }, [searchTerm, data, error]);

//   return (
//     <div className="flex flex-col">
//       <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

//       <div className="flex flex-wrap sm:justify-start justify-center gap-8">
//         {songs.map((track, i) => (
//           <SongCard
//             key={track.id}
//             song={{
//               id: track.id,
//               title: track.name,
//               artistName: track.artists[0]?.name || 'Unknown Artist',
//               albumCover: track.album?.images[0]?.url || '',
//               durationMs: track.duration_ms,
             
//             }}
//             isPlaying={isPlaying}
//             activeSong={activeSong}
//             data={songs}
//             i={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;

import { useGetTopTracksQuery } from '../redux/services/audiusCoreApi';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopTracksQuery();

  const filteredSongs = data?.data?.filter((song) =>
    song.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

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
