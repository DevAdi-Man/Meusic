import { create } from "zustand";

interface RecentlyPlayed {
  id: string;
  songName: string;
  singerName: string;
  imgUrl: string;
  spotifyUrl: string;
  playedAt: string;
}

interface RecentlyPlayedState {
  recentlyPlayed: RecentlyPlayed[];
  loading: boolean;
  error: string | null;
  setRecentlyPlayed: (tracks: RecentlyPlayed[]) => void;
  clearRecentlyPlayed: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const usePlayedHistory = create<RecentlyPlayedState>((set) => ({
  recentlyPlayed: [],
  loading: false,
  error: null,
  setRecentlyPlayed: (tracks) => set({ recentlyPlayed: tracks }),
  clearRecentlyPlayed: () => set({ recentlyPlayed: [] }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
