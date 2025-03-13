import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppStack from './AppStack';
import TrendingNow from '../screens/ui/TrendingNow';
import PopularArtists from '../screens/ui/PopularArtists';
import TopCharts from '../screens/ui/TopCharts';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'fade'}}>
        <Stack.Screen name='bottom' component={AppStack} />
        <Stack.Screen name='TrendingNow' component={TrendingNow} />
        <Stack.Screen name='PopularArtists' component={PopularArtists}/>
        <Stack.Screen name='TopCharts' component={TopCharts} />
    </Stack.Navigator>
  )
}