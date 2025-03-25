import axios from "axios";

const API_URL = "https://api.spotify.com/v1/me";

const BASE_URL = "https://api.spotify.com/v1";
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
    // console.log("response data--> ",response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data : ", error);
    return null;
  }
};
