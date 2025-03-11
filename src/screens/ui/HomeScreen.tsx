import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Avatar from "../../components/AvatarBatch";
import { getTime } from "../../utils/getTime";
import { theme } from "../../styles/theme";
import { fonts } from "../../styles/font";

//icons Imports Starts ------------------->

// Imports End here ---------------------->
export default function HomeScreen() {
  // const isImgPresent = true;
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(getTime());
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Profile Info */}
        <Avatar name="Aditya" size={60} />
        <View style={styles.userProfile}>
          <Text style={styles.TextGreeting}>{greeting}</Text>
          {/* user name */}
          <Text style={styles.userNameText}>Aditya raj</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    marginTop: 40,
    margin: 5,
    flexDirection: "row",
    gap: 15,
    borderWidth:2
  },
  TextGreeting: {
    fontSize: 18,
    paddingTop:2,
    fontWeight:theme.fontWeight.bold,
    fontFamily:fonts.Bold
  },
  userProfile:{
    // paddingTop:10,
    borderWidth:2,
    flexDirection:'column',
    justifyContent:'center',
  },
  userNameText:{
    paddingTop:10,
    paddingLeft:5,
    fontSize:18,
    fontWeight:theme.fontWeight.semiBold,
    fontFamily:fonts.SemiBold
  }
});
