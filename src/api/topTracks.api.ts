import axios from "axios";
import { useAuthStore } from "../store/authStore";

export const fetchTopTrack = async (limit = 10) => {
  try {
    const { accessToken } = useAuthStore.getState();

    const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit,
        time_range: "medium_term",
      },
    });

    const trackData = response.data.items.map((track: any) => ({
      id: track.id,
      songName: track.name,
      singerName: track.artists.map((a: any) => a.name).join(", "),
      imgUrl: track.album.images?.[0]?.url ?? "",
      spotifyUrl: track.external_urls.spotify,
    }));

    return trackData;
  } catch (error) {
    console.log("Failed to fetch top tracks:", error);
    throw error;
  }
};
