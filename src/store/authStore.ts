import { create } from "zustand";
import { AuthState } from "../utils/Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist,createJSONStorage } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }), // Clear token on logout
    }),
    {
      name: "auth-storage", // AsyncStorage key
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);