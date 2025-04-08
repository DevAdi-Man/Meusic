// import { useMusicStore } from '../store/useMusicStore';
import { useTrendingStore } from '../store/useMusicStore';
import { axiosInstance } from './user.api'; // your axios config
// import { useMusicStore } from './useMusicStore';
const countryCode = 'IN' 
const formatTrendingData = (albums: any[]) => {
  return albums
    .filter((album) => album.available_markets?.includes(countryCode)) // ✅ filter here
    .map((album) => ({
      id: album.id,
      songName: album.name,
      singerName: album.artists?.map((a: any) => a.name).join(", "),
      imgUrl: album.images?.[0]?.url || "",
      spotifyUrl: album.external_urls.spotify,
    }));
};

export const fetchTrendingTracks = async () => {
  const setTrendingTracks = useTrendingStore.getState().setTrending;

  try {
    const response = await axiosInstance.get('/browse/new-releases', {
      params: {
        market: countryCode, // e.g., "IN", "US", "GB"
        limit: 41,
      },
    });
    const items = response.data.albums.items;
    // console.log("items musics --> ",items);
    const formattedSongs = formatTrendingData(items);
    setTrendingTracks(formattedSongs);
  } catch (err) {
    console.error("Failed to fetch trending tracks:", err);
  }
};
