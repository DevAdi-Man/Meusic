import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthRootStackParamList } from '../../utils/Types'
export default function LoginScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
    return (
    <View>
     <Text>Hello</Text>
    </View>
  )
}