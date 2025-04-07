import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import React, { useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import { useAuthStore } from "../../store/authStore";
import { theme } from "../../styles/theme";
import { wp, hp } from "../../helper/common";
import Constants from "expo-constants";

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function Welcome() {
  const { setToken } = useAuthStore();
  const clientId = Constants.expoConfig?.extra?.API_CLIENT_ID;

  const redirectUri = "exp://192.168.31.130:8081/--/spotify-auth-callback";

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: clientId!,
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
      ],
      redirectUri: "exp://192.168.31.130:8081/--/spotify-auth-callback",
      usePKCE: true,
      responseType: AuthSession.ResponseType.Code,
    },
    discovery
  );

  useEffect(() => {
    const fetchToken = async () => {
      if (response?.type === "success" && response.params.code) {
        try {
          const tokenResponse = await fetch(discovery.tokenEndpoint!, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              grant_type: "authorization_code",
              code: response.params.code,
              redirect_uri: redirectUri,
              client_id: clientId!,
              code_verifier: request?.codeVerifier!,
            }).toString(),
          });

          const data = await tokenResponse.json();

          if (data.access_token) {
            await setToken(data.access_token, data.refresh_token);
          } else {
            console.log("Token exchange failed:", data);
            Alert.alert("Error", "Token exchange failed");
          }
        } catch (e) {
          console.error("OAuth error:", e);
          Alert.alert("Error", "Something went wrong during login");
        }
      }
    };

    fetchToken();
  }, [response]);

  return (
    <View style={styles.container}>
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
      <Pressable
        style={styles.signUpBtn}
        onPress={() => promptAsync()}
        disabled={!request}
      >
        <Text style={styles.signUpbuttonText}>SIGN UP</Text>
      </Pressable>
      <Pressable
        style={styles.logInBtn}
        onPress={() => promptAsync()}
        disabled={!request}
      >
        <Text style={styles.logInbuttonText}>LOG IN</Text>
      </Pressable>
      <View style={{ flex: 1 }} />
      <View style={styles.TextTAC}>
        <Text style={styles.TAC}>By clicking on Sign up, you agree to</Text>
        <Text style={styles.TAC}>Music's Terms and Conditions of Use.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  ImageContainer: {
    marginTop: 170,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  img: {
    width: wp(25),
    height: hp(10),
    borderRadius: theme.radius.xl,
  },
  ImageText: {
    color: theme.colors.black,
    fontSize: 30,
    fontWeight: theme.fontWeight.bold,
    fontFamily: "sans-serif",
  },
  headingText: {
    fontSize: 45,
    fontWeight: "800",
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
