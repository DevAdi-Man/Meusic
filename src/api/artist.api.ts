//fetching popular artist

import { Artist } from "../utils/Types";
import { axiosInstance } from "./user.api";

export const fetchingPopularArtist = async (
  query = "genre:indian",
  limit = 15
): Promise<Artist[]> => {
  try {
    const response = await axiosInstance.get("/search", {
      params: {
        q: query,
        type: "artist",
        limit,
      },
    });

    const artists = response.data.artists.items;

    return artists.map((artist: any) => ({
      id: artist.id,
      name: artist.name,
      imageUrl: artist.images?.[0]?.url || "",
      followers: artist.followers.total,
      genres: artist.genres,
      spotifyUrl: artist.external_urls.spotify,
    }));
  } catch (error) {
    console.error("Error while fetching Popular Artist : ", error);
    return [];
  }
};
