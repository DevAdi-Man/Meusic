import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { fonts } from '../../styles/font';
import { hp } from '../../helper/common';
import { theme } from '../../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
const Security = () => {
  return (
     <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CommingSoon...</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.Regular,
    fontSize: hp(4),
    color:theme.colors.green,
  },
});
export default Security