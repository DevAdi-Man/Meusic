import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { hp, wp } from "../../helper/common";
import { fonts } from "../../styles/font";
import { theme } from "../../styles/theme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Avatar from "../../components/AvatarBatch";
const UserInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer}>
          {/* back icons */}
          <Ionicons
            name="arrow-back-outline"
            style={styles.icons}
            color="black"
          />
          {/* profile text */}
          <Text style={styles.TextOne}>Profile</Text>
        </View>
        {/* edit icons */}
        <FontAwesome6 name="edit" style={[styles.editIcon]} color="black" />
      </View>
      {/* Avatar or user Image */}
      <View style={styles.AvatarContainer} >
        <Avatar name="user" size={hp(25)} imageUrl={require("../../../assets/boy.jpg")} />
        <Text>Aditya</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingHorizontal: 8,
    gap: 15,
    // borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    fontSize: wp(8.6),
  },
  TextOne: {
    fontFamily: fonts.SemiBold,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: hp(3),
  },
  editIcon: {
    fontSize: wp(7),
    paddingRight: 12,
  },
  AvatarContainer:{
    // borderWidth:2,
    flexDirection:'column',
    // justifyContent:'center',
    alignItems:'center',
    marginTop:hp(5),
  }
});

export default UserInfo;
