import { create } from "zustand";
import { AuthState, UserProp, UserState } from "../utils/Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";
import { fetchUser } from "../api/user.api";

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      getUser: async () => {
        const token = await AsyncStorage.getItem("auth-token");
        if (!token) return;
        try {
          const userData: UserProp = await fetchUser(token);

          if (!userData) {
            console.error("Error: Fetched user data is null.");
            return; // Exit early if data is null
          }
          await AsyncStorage.setItem("user", JSON.stringify(userData));
          set({
            user: {
              id: userData.id,
              display_name: userData.display_name,
              email: userData.email,
              images: userData.images || [],
              followers: userData.followers ?? { total: 0 }, // Handle case when followers might be null
            },
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      },
      clearUser: async () => {
        await AsyncStorage.removeItem("user");
        set({ user: null });
      },
    }),
    {
      name: "user-storage", // AsyncStorage key
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
