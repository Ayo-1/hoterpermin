import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { View, Colors, Text, Button, Image } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Inter_900Black, Inter_500Medium } from "@expo-google-fonts/dev";
import { TouchableOpacity } from "react-native-ui-lib/src/incubator";
import { TouchableHighlight } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

export const Welcome = ({navigation}) => {
  const image = require("../assets/bg.jpeg");
  const logo = require("../assets/logo.jpeg");
  const image3 = require("../assets/bg4.jpeg");
  const image2 = require("../assets/chevron-right-icon.png");
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

    <View style={{height: "45%", backgroundColor: "#f8f60b", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, overflow: "hidden"}}>
    {/* <Image
        source={image3}
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingBottom: 30,
        }}
      ></Image> */}
      </View>
    <View style={{height: 125, width: 125, borderRadius: 125/2, backgroundColor: "#fff", paddingVertical: 0, borderColor: "#f5f5f5", borderWidth: 2, alignSelf: "center", marginTop: -70}}>
      <Image source={logo} style={{height: 30, width: 50}}></Image>
    </View>
    <View style={{paddingTop: 60, paddingHorizontal: 30}}>
    <Text
            style={{
              fontSize: 45,
              fontFamily: "Inter_900Black",
              textAlign: "center",
            }}
          >
            HotelPerMin
          </Text>

          <Text
            style={{
              fontSize: 18,
              marginTop: 25,
              color: "grey",
              textAlign: "center",
              fontFamily: "Inter_500Medium"
            }}
          >
            Planning your trip becomes more easier with the ideal hotel app.
          </Text>
          <View style={{ paddingTop: 130, paddingHorizontal: 60 }}>
          <Button onPress={() =>
        navigation.navigate('Login', {name: 'Jane'})
      } label={'Get Started for free'} size={Button.sizes.large} iconOnRight={true} iconSource={() =>   <Ionicons name="chevron-forward" size={16} style={{marginTop: 1, marginRight: -30, marginLeft: 16}} color="#fff" />} backgroundColor={"#040464"} labelStyle={{color: "#fff", paddingTop: 5, paddingBottom: 5,  fontFamily: "Inter_500Medium"}}/>
           
          </View>
      </View>

        <StatusBar style="auto" />
    </View>
  );
};
