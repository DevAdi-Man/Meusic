//type for screen
export type AuthRootStackParamList = {
  Login: undefined;
  Register: undefined;
  Welcome: undefined;
};

// this for getting screen height and width percentage.
export interface PercentageFunction {
  (percentage: number): number;
}

//auth Store type checker
export interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void; // For logout
}

//user store type checker

export type UserProp = {
  id: string;
  display_name: string;
  email: string;
  images: { url: string; height?: number; width?: number }[];
  followers: { total: number } | null;
};
export interface UserState {
  user: UserProp | null;
  getUser: () => Promise<void>;
  clearUser: ()=> Promise<void>;
}

//Artist 
export interface Artist {
  id:string;
  name:string;
  imageUrl:string;
  followers:number;
  genra:string[];
  spotifyUrl:string;
}
