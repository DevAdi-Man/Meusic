// store/useAudioStore.ts
import { create } from 'zustand';
import { Audio, AVPlaybackStatus } from 'expo-av';

interface AudioState {
  sound: Audio.Sound | null;
  isPlaying: boolean;
  playbackStatus: AVPlaybackStatus | null;
  loadAudio: (uri: string) => Promise<void>;
  playSound: () => Promise<void>;
  pauseSound: () => Promise<void>;
  unloadSound: () => Promise<void>;
}

const useAudioStore = create<AudioState>((set, get) => ({
  sound: null,
  isPlaying: false,
  playbackStatus: null,
  loadAudio: async (uri: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri }, { shouldPlay: false });
      set({ sound });
      const playbackStatus = await get().sound?.getStatusAsync();
      set({ playbackStatus });
    } catch (error) {
      console.error("Failed to load sound", error);
    }
  },
  playSound: async () => {
    try {
      if (get().sound) {
        await get().sound?.playAsync();
        set({ isPlaying: true });
      }
    } catch (error) {
      console.error("Failed to play sound", error);
    }
  },
  pauseSound: async () => {
    try {
      if (get().sound) {
        await get().sound?.pauseAsync();
        set({ isPlaying: false });
      }
    } catch (error) {
      console.error("Failed to pause sound", error);
    }
  },
  unloadSound: async () => {
     try {
      if (get().sound) {
        await get().sound?.unloadAsync();
        set({ sound:null, isPlaying: false, playbackStatus: null });
      }
    } catch (error) {
      console.error("Failed to unload sound", error);
    }
  },
}));

export default useAudioStore;
