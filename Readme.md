# 🎵 Meusic – A Modern React Native Music App

**Meusic** is a sleek, mobile-first music streaming app built with React Native. It features Spotify authentication, real-time music search, seamless audio playback, and a global mini player—all wrapped in a clean UI optimized for performance and responsiveness.

## 📽 Demo

Check out Meusic in action:

- 🔹 [Demo Video 1](https://x.com/Aditya_raj9910/status/1911163880509763880)
- 🔹 [Demo Video 2](https://x.com/Aditya_raj9910/status/1902031502663352804)

## ✨ Features

- 🔐 Spotify OAuth 2.0 Login
- 🔍 Search music by song or artist
- 🎵 Real-time audio playback using `expo-av`
- 📱 Global mini player with playback controls
- 🧠 Lightweight state management via Zustand
- 🗂️ File-based navigation with Expo Router
- 🎧 Streamlined user experience with custom UI components
- 🔊 Volume & seek bar controls
- ⚙️ Settings screen to manage audio behavior

## 🛠 Tech Stack

- **React Native (Expo SDK 53)**
- **Zustand** – for state management
- **Expo AV** – for audio playback
- **Spotify Web API** – for authentication & music data
- **Expo Router** – for modern navigation
- **TypeScript** – for type safety

## 📦 Project Structure

```text
Meusic/
├─ assets/
│  ├─ fonts/
│  │  ├─ RobotoSlab-Black.ttf
│  │  ├─ RobotoSlab-Bold.ttf
│  │  ├─ RobotoSlab-ExtraBold.ttf
│  │  ├─ RobotoSlab-ExtraLight.ttf
│  │  ├─ RobotoSlab-Light.ttf
│  │  ├─ RobotoSlab-Medium.ttf
│  │  ├─ RobotoSlab-Regular.ttf
│  │  ├─ RobotoSlab-SemiBold.ttf
│  │  └─ RobotoSlab-Thin.ttf
│  ├─ adaptive-icon.png
│  ├─ boy.jpg
│  ├─ favicon.png
│  ├─ icon.png
│  ├─ icon2.png
│  ├─ musicNote.png
│  ├─ musicNote.svg
│  ├─ RehleMereKolSimranChoudhary.mp3
│  ├─ splash-icon.png
│  └─ splash-icon1.png
├─ src/
│  ├─ api/
│  │  ├─ album.api.ts
│  │  ├─ artist.api.ts
│  │  ├─ auth.api.ts
│  │  ├─ browseCategories.api.ts
│  │  ├─ music.api.ts
│  │  ├─ playerHistory.api.ts
│  │  ├─ search.api.ts
│  │  ├─ topTracks.api.ts
│  │  └─ user.api.ts
│  ├─ components/
│  │  ├─ AvatarBatch.tsx
│  │  ├─ Card.tsx
│  │  ├─ FontLoader.tsx
│  │  ├─ MenuItem.tsx
│  │  ├─ miniPlayer.tsx
│  │  ├─ MusicShowcase.tsx
│  │  ├─ Provider.tsx
│  │  ├─ SearchAndBackHeader.tsx
│  │  └─ SearchBar.tsx
│  ├─ helper/
│  │  └─ common.ts
│  ├─ navigation/
│  │  ├─ AppStack.tsx
│  │  ├─ AuthStack.tsx
│  │  └─ MainStack.tsx
│  ├─ screens/
│  │  ├─ auth/
│  │  │  ├─ LoginScreen.tsx
│  │  │  ├─ RegisterScreen.tsx
│  │  │  └─ Welcome.tsx
│  │  ├─ bilderPlateforMusicSong/
│  │  │  ├─ AudioPlayerScreen.tsx
│  │  │  ├─ audioStore.ts
│  │  │  └─ TrackCard.tsx
│  │  └─ ui/
│  │     ├─ AlbumsScreen.tsx
│  │     ├─ ArtistsScreen.tsx
│  │     ├─ AudioVideo.tsx
│  │     ├─ DataSaverStorage.tsx
│  │     ├─ DownloadsScreen.tsx
│  │     ├─ EditProfile.tsx
│  │     ├─ ExploreScreen.tsx
│  │     ├─ HistorysScreen.tsx
│  │     ├─ HomeScreen.tsx
│  │     ├─ LibraryScreen.tsx
│  │     ├─ Notification.tsx
│  │     ├─ NowPlaying.tsx
│  │     ├─ Playback.tsx
│  │     ├─ PlaylistScreen.tsx
│  │     ├─ PodcastsScreen.tsx
│  │     ├─ PopularArtists.tsx
│  │     ├─ ProfileScreen.tsx
│  │     ├─ SearchScreen.tsx
│  │     ├─ Security.tsx
│  │     ├─ SongsScreen.tsx
│  │     ├─ TopCharts.tsx
│  │     ├─ TopTrack.tsx
│  │     ├─ TrendingNow.tsx
│  │     └─ UserInfo.tsx
│  ├─ store/
│  │  ├─ artistStore.ts
│  │  ├─ authStore.ts
│  │  ├─ searchStore.ts
│  │  ├─ useAlbum.ts
│  │  ├─ useCategoryStore.ts
│  │  ├─ useMusicStore.ts
│  │  ├─ usePlayedHistoryStore.ts
│  │  ├─ usePlayerStore.ts
│  │  ├─ userStore.ts
│  │  └─ useTrackStore.ts
│  ├─ styles/
│  │  ├─ font.ts
│  │  └─ theme.ts
│  └─ utils/
│     ├─ data.ts
│     ├─ getTime.ts
│     └─ Types.ts
├─ .gitignore
├─ app.json
├─ App.tsx
├─ assets.d.ts
├─ eas.json
├─ index.ts
├─ metro.config.ts
├─ package-lock.json
├─ package.json
├─ Readme.md
└─ tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16

### Installation

```bash
git clone https://github.com/yourusername/meusic.git
cd meusic
npm install
expo start

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
REDIRECT_URI=your_redirect_uri
```

---

## ✅ `LICENSE` (MIT)

```text
MIT License

Copyright (c) 2025 Devadi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
