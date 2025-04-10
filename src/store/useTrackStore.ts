import { create } from 'zustand';

interface TrackType {
  id: string;
  songName: string;
  singerName: string;
  imgUrl: string;
  spotifyUrl: string;
}

interface TrackState {
  tracks: TrackType[];
  setTracks: (tracks: TrackType[]) => void;
}

export const useTrack = create<TrackState>((set) => ({
  tracks: [],
  setTracks: (trackList: TrackType[]) => {
    set({ tracks: trackList });
  },
}));
