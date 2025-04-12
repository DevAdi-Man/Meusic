import axios from "axios";
import { axiosInstance } from "./user.api";

interface SpotifyRecentlyPlayedTrack {
  track: {
    id: string;
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
    external_urls: { spotify: string };
  };
  played_at: string;
}

export const fetchSongPlayedHistory = async (
  accessToken: string,
  limit = 10
) => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit,
        },
      }
    );

    const items: SpotifyRecentlyPlayedTrack[] = response.data.items;
    if (!items || items.length === 0) {
      console.warn("Recently played is empty:", response.data);
    }
    return items.map((item) => ({
      id: `${item.track.id}-${item.played_at}`,
      songName: item.track.name,
      singerName: item.track.artists.map((a) => a.name).join(", "),
      imgUrl: item.track.album.images[0]?.url ?? "",
      spotifyUrl: item.track.external_urls.spotify,
      playedAt: item.played_at,
    }));
  } catch (error) {
    console.error("Error fetching recently played songs:", error);
    throw new Error("Failed to fetch played history.");
  }
};
