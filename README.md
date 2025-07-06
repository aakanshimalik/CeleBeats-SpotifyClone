# CeleBeats - Celebal + Beats 

Develop an elegant React.js spotify clone named CeleBeats. 
⚠️ Note: Due to limited support for genre-specific filtering in the Audius public API, certain features (like search and genre browsing) are implemented with fallback logic and may not return full results.

# Demo
  https://celebeats-spotifyclone.onrender.com 
  Deployment via render.com


## 🚀 Features
- 🎧 Stream trending songs

- 🧑‍🎤 Top Artists section

- 📁 Tracks by Genre via dropdown

- 🌍 Songs by Country (based on genre fallback mapping)

- 💡 Loading & error handling with graceful UI

 - 🎨 Styled using Tailwind CSS

## 🧪 Known Limitations (Audius API)
This project uses the public Audius API, which comes with a few known limitations:

- 🎼 No endpoint for non-trending genre songs → only trending tracks by genre are available

- 🎭 Some genres (e.g., Soul, Film, Reggae) may return empty arrays

- 📈 Top Artists fetched by aggregating trending tracks, not via a direct endpoint

## 🛠️ Technologies Used
- React
- redux Toolkit
- Audius API
- React Router DOM
- Vite(for faster deployment)


## How to run locally?
git clone https://github.com/aakanshimalik/CeleBeats-SpotifyClone.git
cd into project
npm install
npm run dev


## 🙋‍♂️ Why Audius?
Audius is a decentralized, artist-first streaming platform that offers a public API. While it lacks some of the advanced endpoints you'd find in Spotify or Shazam, it provides a great base for showcasing:

- Data fetching via RTK Query
- Pagination & filtering logic
- Handling real-world API constraints



## Contribution Notes
This project is focused on demonstrating frontend integration with a real API under limitations. If Audius expands its API, the app can evolve accordingly.


## Author 
Aakanshi Malik
