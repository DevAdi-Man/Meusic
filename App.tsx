import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { useAuthStore } from './src/store/authStore';

const AppNavigation:React.FC = ()=>{
  const {token} = useAuthStore();
  // console.log(isAuthenticated);
  

  return token ? <AppStack />: <AuthStack/>
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <AppNavigation />
    </NavigationContainer>
  );
}
