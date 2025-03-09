import { View, Text } from 'react-native'
import * as React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from '../../utils/Types';


export default function RegisterScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>RegisterScreen</Text>
      <Button onPress={()=> navigation.navigate('Login')}>go to login Screen</Button>
      <Button style={{margin:20}} onPress={()=> navigation.goBack()}>go back</Button>
    </View>
  )
}