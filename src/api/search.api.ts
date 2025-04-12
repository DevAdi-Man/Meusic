// api/search.api.ts
import axios from 'axios';

export const searchTracks = async (token: string, query: string) => {
  const response = await axios.get('https://api.spotify.com/v1/search', {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      q: query,
      type: 'track',
      limit: 10,
    },
  });
  return response.data.tracks.items.map((track: any) => ({
    id: track.id,
    name: track.name,
    artist: track.artists.map((a: any) => a.name).join(', '),
    imageUrl: track.album.images[0]?.url ?? '',
  }));
};