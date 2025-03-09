
import Constants from "expo-constants";
export const config = {
    issuer:'https://accounts.spotify.com',
    clientId:Constants.expoConfig?.extra?.API_CLIENT_ID,
    scopes:[
        'user-read-email',
        'user-library-read',
        'user-read-recently-played',
        'user-top-read',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public'
    ],
    redirectUrl:'exp://192.168.31.130:8081/--/spotify-auth-callback'
}

