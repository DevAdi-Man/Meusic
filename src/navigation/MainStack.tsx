import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import TrendingNow from "../screens/ui/TrendingNow";
import PopularArtists from "../screens/ui/PopularArtists";
import TopCharts from "../screens/ui/TopCharts";
import SearchScreen from "../screens/ui/SearchScreen";
import PlaylistScreen from "../screens/ui/PlaylistScreen";
import DownloadsScreen from "../screens/ui/DownloadsScreen";
import PodcastsScreen from "../screens/ui/PodcastsScreen";
import AlbumsScreen from "../screens/ui/AlbumsScreen";
import SongsScreen from "../screens/ui/SongsScreen";
import ArtistsScreen from "../screens/ui/ArtistsScreen";
import HistorysScreen from "../screens/ui/HistorysScreen";
import UserInfo from "../screens/ui/UserInfo";
import Notification from "../screens/ui/Notification";
import AudioVideo from "../screens/ui/AudioVideo";
import Playback from "../screens/ui/Playback";
import DataSaverStorage from "../screens/ui/DataSaverStorage";
import Security from "../screens/ui/Security";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="bottom" component={AppStack} />
      <Stack.Screen name="TrendingNow" component={TrendingNow} />
      <Stack.Screen name="PopularArtists" component={PopularArtists} />
      <Stack.Screen name="TopCharts" component={TopCharts} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name='Playlists' component={PlaylistScreen} />
      <Stack.Screen name='Downloads' component={DownloadsScreen} />
      <Stack.Screen name='Podcasts' component={PodcastsScreen} />
      <Stack.Screen name='Albums' component={AlbumsScreen} />
      <Stack.Screen name='Songs' component={SongsScreen} />
      <Stack.Screen name='Artists' component={ArtistsScreen} />
      <Stack.Screen name='Historys' component={HistorysScreen}/>
      <Stack.Screen name='UserInfo' component={UserInfo} />
      <Stack.Screen name='Notification' component={Notification} />
      <Stack.Screen name='AudioVideo' component={AudioVideo} />
      <Stack.Screen name="Playback" component={Playback} />
      <Stack.Screen name="DataSaverStorage" component={DataSaverStorage} />
      <Stack.Screen name="Security"  component={Security}/>
    </Stack.Navigator>
  );
}
