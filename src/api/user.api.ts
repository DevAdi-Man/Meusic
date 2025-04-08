import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { config } from "./auth.api";
import { useAuthStore } from "../store/authStore";

const API_URL = "https://api.spotify.com/v1/me";

const BASE_URL = "https://api.spotify.com/v1";
const TOKEN_URL = "https://accounts.spotify.com/api/token";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const fetchUser = async (token: string) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("response data--> ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data : ", error);
    return null;
  }
};

// add before every request interceptor adds the lastest access token
axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem("auth-token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originRequest = error.config;
    if (error.response?.status === 401 && !originRequest._retry) {
      originRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem("refresh-token");

        if (!refreshToken) {
          console.warn("No refresh token found.");
          return Promise.reject(error);
        }

        const body = new URLSearchParams();
        body.append("grant_type", "refresh-token");
        body.append("refresh-token", refreshToken);
        body.append("client_id", config.clientId);

        const tokenResponse = await axios.post(TOKEN_URL, body.toString(), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        const newAccessToken = tokenResponse.data.access_token;
        await AsyncStorage.setItem("auth-token", newAccessToken);
        useAuthStore.getState().setToken(newAccessToken,refreshToken); // optional: keep Zustand in sync

        // Retry original request with new token
        originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originRequest);
      } catch (refreshError) {
        console.error("Refersh token failed: ", refreshError);
        await AsyncStorage.multiRemove(["auth-token", "refresh-token"]);
        useAuthStore.getState().clearToken?.(); // optional logout/reset
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
