import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { hp, wp } from "../../helper/common";
import { theme } from "../../styles/theme";
import { config } from "../../api/auth.api";
import * as AuthSession from "expo-auth-session";
import { useAuthStore } from "../../store/authStore";

// Discovery document for Spotify OAuth
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function Welcome() {
  const {setToken,token} = useAuthStore();
  console.log('token : ',JSON.stringify(token));
  
  // Create authentication request
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: config.clientId,
      scopes: config.scopes,
      redirectUri: config.redirectUrl,
      responseType: "token",
    },
    discovery
  );
// Handle authentication response
  useEffect(()=>{
    if(response?.type === 'success' && response.params.access_token){
        setToken(response.params.access_token)
    }
  },[response]);

  return (
    <View style={styles.container}>
      {/* logo  */}
      <View style={styles.ImageContainer}>
        <Image
          source={require("../../../assets/splash-icon.png")}
          style={styles.img}
        />
        <Text style={styles.ImageText}>Music</Text>
      </View>
      <Text style={[styles.headingText, styles.commonText]}>
        We play the music.
      </Text>
      <Text style={styles.headingText}>You enjoy it. Deal?</Text>
      {/* <Button title='SIGN UP' style={styles.buttonStyle} /> */}
      <View>
        <Pressable style={styles.signUpBtn} onPress={()=> promptAsync()} disabled={!request}>
          <Text style={styles.signUpbuttonText}>SIGN UP</Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.logInBtn} onPress={()=> promptAsync()} disabled={!request}>
          <Text style={styles.logInbuttonText}>LOG IN</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.TextTAC}>
        <Text style={styles.TAC}>By clicking on Sign up, you are agree to</Text>
        <Text style={styles.TAC}>Music's Terms and Conditions of Use.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  ImageContainer: {
    borderRadius: 20,
    marginTop: 170,
    marginLeft: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  img: {
    width: wp(25),
    height: hp(10),
    borderCurve: "circular",
    borderRadius: theme.radius.xl,
  },
  ImageText: {
    color: theme.colors.black,
    fontSize: 30,
    fontWeight: theme.fontWeight.bold,
    fontFamily: "san-sarif",
  },
  headingText: {
    // marginTop:15,
    // marginLeft:20,
    fontSize: 45,
    fontWeight: 800,
    color: theme.colors.black,
  },
  commonText: {
    marginTop: 40,
  },
  signUpBtn: {
    marginTop: 70,
    backgroundColor: theme.colors.green,
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
  },
  signUpbuttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: wp(5),
  },
  logInBtn: {
    marginVertical: 25,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.neutral(0.5),
  },
  logInbuttonText: {
    color: theme.colors.black,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: wp(5),
  },
  TextTAC: {
    flex: 1,
    // borderWidth:2,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  TAC: {
    fontSize: wp(3.5),
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.neutral(0.5),
  },
});
