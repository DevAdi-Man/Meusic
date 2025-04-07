import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setToken: (accessToken: string | null, refreshToken?: string | null) => Promise<void>;
  clearToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,

      setToken: async (accessToken, refreshToken) => {
        if (!accessToken) {
          await AsyncStorage.multiRemove(["auth-token", "refresh-token"]);
        } else {
          await AsyncStorage.setItem("auth-token", accessToken);
          if (refreshToken) {
            await AsyncStorage.setItem("refresh-token", refreshToken);
          }
        }
        set({ accessToken, refreshToken: refreshToken || null });
      },

      clearToken: async () => {
        await AsyncStorage.multiRemove(["auth-token", "refresh-token"]);
        set({ accessToken: null, refreshToken: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
