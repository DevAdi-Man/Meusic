import { create } from "zustand";
import { axiosInstance } from "../api/user.api";
import AsyncStorage from "@react-native-async-storage/async-storage";
type SpotifyAlbumResponse = {
  albums: Album[];
};

type Album = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restrictions;
  type: string;
  uri: string;
  artists: Artist[];
  tracks: Tracks;
  copyrights: Copyright[];
  external_ids: ExternalIds;
  genres: string[];
  label: string;
  popularity: number;
};

type ExternalUrls = {
  spotify: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
};

type Restrictions = {
  reason: string;
};

type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

type Tracks = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Track[];
};

type Track = {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from?: LinkedFrom;
  restrictions?: Restrictions;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

type LinkedFrom = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
};

type Copyright = {
  text: string;
  type: string;
};

type ExternalIds = {
  isrc: string;
  ean: string;
  upc: string;
};

type AlbumStore = {
  albums: Album[];
  setAlbums: () => void;
};
const useAlbumStore = create<AlbumStore>((set) => ({
  albums: [],
  setAlbums: async () => {
    try {
      const token = await AsyncStorage.getItem("auth-token");
      if (!token) {
        console.error("No authentication token found!");
        return;
      }
      const response = await axiosInstance.get("browse/new-releases?limit=20", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const albumData = response.data.albums.items;
      await AsyncStorage.setItem("all-album", JSON.stringify(albumData));
      set({ albums: albumData });
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  },
}));
export default useAlbumStore;
