import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import Welcome from '../screens/auth/Welcome';

const Stack = createNativeStackNavigator();


export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='Welcome' component={Welcome} />
      {/* <Stack.Screen name='Login' component={LoginScreen} /> */}
      {/* <Stack.Screen name='Register' component={RegisterScreen} /> */}
    </Stack.Navigator>
  )
}