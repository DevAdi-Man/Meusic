import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuthStore } from '../store/authStore'
import { theme } from '../styles/theme';
import { wp } from '../helper/common';
// import { useNavigation } from '@react-navigation/native';
// import { AuthRootStackParamList } from '../utils/Types';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function AppStack() {
  const {token,clearToken} = useAuthStore();
  console.log('token in appStack : ',token);
  
  // const navigation = useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
  const handleLogut = ()=>{
    clearToken();
    // navigation.navigate('Welcome')
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>AppStack {JSON.stringify(token)}</Text>
      <View>
        <Pressable style={{marginVertical:45,padding:25,backgroundColor:theme.colors.green}} onPress={handleLogut}>
          <Text style={{color:theme.colors.white,fontSize:wp(5)}}>Logout</Text>
        </Pressable>
      </View>
    </View>
  )
}