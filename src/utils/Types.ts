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
