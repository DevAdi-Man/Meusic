// store/useAlbumStore.ts
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAlbum } from "../api/album.api";
// import { fetchNewReleases } from "../api/album.api";

type Album = {
  images: any; 
  id:string;
  name:string,
  imageUrl:string;
  songName?:string
};

type AlbumStore = {
  albums: Album[];
  setAlbums: () => void;
  clearAlbums:()=> void;
};

export const useAlbumStore = create<AlbumStore>((set) => ({
  albums: [],
  setAlbums: async () => {
    try {
      const data = await fetchAlbum("IN");
      await AsyncStorage.setItem("all-album", JSON.stringify(data));
      set({ albums: data });
    } catch (error) {
      console.error("Error setting albums in Zustand:", error);
    }
  },
  clearAlbums: async ()=> {
    await AsyncStorage.removeItem('all-album');
    set({albums:[]});
  },
}));
