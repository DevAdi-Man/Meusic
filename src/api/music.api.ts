import { useTrendingStore } from "../store/useMusicStore";
import { axiosInstance } from "./user.api";
import localMp3 from "../../assets/RehleMereKolSimranChoudhary.mp3"; // ✅ safe import

const countryCode = "IN";

export const formatTrendingData = (albums: any[]) => {
  return albums
    .filter((album) => album.available_markets?.includes(countryCode))
    .map((album) => ({
      id: album.id,
      songName: album.name,
      singerName: album.artists?.map((a: any) => a.name).join(", "),
      imgUrl: album.images?.[0]?.url || "",
      spotifyUrl: album.external_urls.spotify,
      audioUrl: album.preview_url || localMp3, // ✅ fallback to local
    }));
};

export const fetchTrendingTracks = async (limit = 30) => {
  const setTrendingTracks = useTrendingStore.getState().setTrending;

  try {
    const response = await axiosInstance.get("/browse/new-releases", {
      params: {
        market: countryCode,
        limit,
      },
    });

    const items = response.data.albums.items;
    const formattedSongs = formatTrendingData(items);
    setTrendingTracks(formattedSongs);

    return formattedSongs;
  } catch (err) {
    console.log("Failed to fetch trending tracks:", err);
    throw err;
  }
};
