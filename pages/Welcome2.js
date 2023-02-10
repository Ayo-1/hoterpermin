import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { View, Colors, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/dev";
import { TouchableOpacity } from "react-native-ui-lib/src/incubator";
import { TouchableHighlight } from "react-native-gesture-handler";

export const Welcome = () => {
  const image = require("../assets/bg.jpeg");
  let [fontsLoaded] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingHorizontal: 10,
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            height: "50%",
            backgroundColor: "white",
            bottom: 0,
            borderRadius: 30,
            paddingTop: 30,
            paddingHorizontal: 21,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "Rubik_900Black",
              textAlign: "center",
            }}
          >
            Explore global map of wind, weather and ocean conditions
          </Text>

          <Text
            style={{
              fontSize: 18,
              marginTop: 15,
              color: "grey",
              textAlign: "center",
            }}
          >
            Planning your trip becomes more easier with the ideal hotel app. You can see hotels around you in a few seconds
          </Text>
          <View style={{ paddingTop: 80, paddingHorizontal: 25 }}>
            <TouchableHighlight
              style={{
                alignItems: "center",
                backgroundColor: "#15c5d1",
                padding: 20,
                borderRadius: 50,
                fontSize: 20
              }}
            >
              <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>Get Started</Text>
            </TouchableHighlight>
            <Text
            style={{
              fontSize: 18,
              marginTop: 15,
              textAlign: "center",
              fontWeight: "400"
            }}
          >Already have an account? <Text style={{"color": "#15c5d1"}}>Login</Text></Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
};
