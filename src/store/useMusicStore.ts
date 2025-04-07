// store/trendingStore.ts
import { create } from 'zustand';

interface TrendingSong {
  id: string;
  songName: string;
  singerName: string;
  imgUrl: string;
  spotifyUrl: string;
}

interface TrendingState {
  trending: TrendingSong[];
  loading:boolean;
  refreshing:boolean;
  setTrending: (songs: TrendingSong[]) => void;
  clearTrending: ()=> Promise<void>;
  setLoading : (val:boolean)=>void; 
  setRefresh: (val:boolean)=> void;
}

export const useTrendingStore = create<TrendingState>((set) => ({
  trending: [],
  loading:false,
  refreshing:false,
  setTrending: (songs) => set({ trending: songs }),
  clearTrending: async ()=>{
    set({trending:[]});
  },
  setLoading : (val)=> set({loading:val}),
  setRefresh : (val)=> set({refreshing:val})
}));
