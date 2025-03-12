import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppStack from './AppStack';
import TrendingNow from '../screens/ui/TrendingNow';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='bottom' component={AppStack} />
        <Stack.Screen name='TrendingNow' component={TrendingNow} />
    </Stack.Navigator>
  )
}