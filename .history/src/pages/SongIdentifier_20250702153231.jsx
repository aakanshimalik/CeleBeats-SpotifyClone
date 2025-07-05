import React, { useState } from 'react';
import axios from 'axios';

const SongIdentifier = () => {
  const [file, setFile] = useState(null);
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('audio', file);
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/identify', formData);
      setSong(res.data.result);
    } catch (err) {
      alert("Error identifying song");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-bold mb-4">🎧 Identify a Song</h2>

      <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4"
        disabled={loading || !file}
      >
        {loading ? "Identifying..." : "Upload & Identify"}
      </button>

      {song && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Result:</h3>
          <p><strong>Title:</strong> {song.title}</p>
          <p><strong>Artist:</strong> {song.artist}</p>
          {song.spotify?.external_urls?.spotify && (
            <a
              href={song.spotify.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              🔗 Listen on Spotify
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default SongIdentifier;