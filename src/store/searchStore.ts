// store/searchStore.ts
import { create } from 'zustand';

interface Track {
  id: string;
  name: string;
  artist: string;
  imageUrl: string;
}

interface SearchStore {
  query: string;
  results: Track[];
  loading: boolean;
  error: string | null;
  recentSearches: Track[];
  setQuery: (q: string) => void;
  setResults: (r: Track[]) => void;
  setLoading: (l: boolean) => void;
  setError: (e: string | null) => void;
  clearResults: () => void;
  addRecentSearch: (track: Track) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  results: [],
  loading: false,
  error: null,
  recentSearches: [],
  setQuery: (q) => set({ query: q }),
  setResults: (r) => set({ results: r }),
  setLoading: (l) => set({ loading: l }),
  setError: (e) => set({ error: e }),
  clearResults: () => set({ results: [] }),
  addRecentSearch: (track) => {
    set((state) => {
      const exists = state.recentSearches.find((t) => t.id === track.id);
      if (exists) return state;

      return {
        recentSearches: [track, ...state.recentSearches].slice(0, 10),
      };
    });
  },
}));
