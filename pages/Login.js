import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, ImageBackground, TextInput } from "react-native";
import { View, Colors, Text, Button, Image } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/dev";
import { TouchableOpacity } from "react-native-ui-lib/src/incubator";
import { TouchableHighlight } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export const Login = ({ navigation }) => {
  const image = require("../assets/bg.jpeg");
  const google = require("../assets/google.png");
  const apple = require("../assets/apple.png");
  const image3 = require("../assets/bg4.jpeg");
  const image2 = require("../assets/chevron-right-icon.png");
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ paddingTop: 80, paddingHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Inter_900Black",
            textAlign: "center",
          }}
        >
          HotelPerMin
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginTop: 15,
            color: "#000",
            textAlign: "center",
            fontFamily: "Inter_500Medium",
          }}
        >
          Sign in to your account with your credentials.
        </Text>
        <View style={{ paddingTop: 70 }}>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              paddingHorizontal: 10,
              color: "#000",
              fontFamily: "Inter_500Medium",
            }}
          >
            Your email address
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="user@example.com"
            value={""}
          />
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              marginTop: 10,
              paddingHorizontal: 10,
              color: "#000",
              fontFamily: "Inter_500Medium",
            }}
          >
            Enter your password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            //   value={number}
            placeholder="*********"
            keyboardType="numeric"
          />
        </View>
        <View style={{ paddingTop: 30, paddingHorizontal: 10 }}>
          <Button
            onPress={() => navigation.navigate("Start", { name: "Jane" })}
            label={"Continue"}
            size={Button.sizes.large}
            iconOnRight={true}
            iconSource={() => (
              <Ionicons
                name="chevron-forward"
                size={16}
                style={{ marginTop: 1, marginRight: -120, marginLeft: 100 }}
                color="#fff"
              />
            )}
            backgroundColor={"#040464"}
            labelStyle={{
              color: "#fff",
              paddingTop: 10,
              paddingBottom: 10,
              fontFamily: "Inter_500Medium",
            }}
          />
          <Pressable
              onPress={() => navigation.navigate("Register", { name: "Jane" })}
            >
             
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              marginTop: 20,
              paddingHorizontal: 10,
              color: "#000",
              fontFamily: "Inter_500Medium",
            }}
          >
            Have an account?{" "}
              <Text
                style={{
                  fontSize: 14,
                  color: "#040464",
                  fontFamily: "Inter_500Medium",
                }}
              >
                Signup Instead
              </Text>
          </Text>
          </Pressable>
          <View
            style={{
              borderBottomColor: "#dedede",
              borderBottomWidth: 1,
              marginHorizontal: 10,
              marginTop: 20,

              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                marginBottom: 5,
                paddingHorizontal: 10,
                color: "#000",
                textAlign: "center",
                fontFamily: "Inter_500Medium",
                backgroundColor: "white",
                marginTop: -17,
                marginBottom: -20,
                width: 40,
              }}
            >
              OR
            </Text>
          </View>
          <View style={{ paddingTop: 30, paddingHorizontal: 10 }}>
            <Button
              onPress={() => navigation.navigate("Login", { name: "Jane" })}
              label={"Sign in with Google"}
              size={Button.sizes.large}
              iconOnRight={true}
              backgroundColor={"#fff"}
              outlineWidth={1}
              iconSource={() => (
                <Image source={google} style={{ height: 15, width: 15 }} />
              )}
              outlineColor={"#dedede"}
              labelStyle={{
                color: "#000",
                paddingTop: 10,
                paddingBottom: 10,
                marginRight: 5,
                fontFamily: "Inter_500Medium",
              }}
            />
          </View>
          <View style={{ paddingTop: 30, paddingHorizontal: 10 }}>
            <Button
              onPress={() => navigation.navigate("Login", { name: "Jane" })}
              label={"Sign in with Apple"}
              size={Button.sizes.large}
              iconOnRight={true}
              backgroundColor={"#fff"}
              outlineWidth={1}
              iconSource={() => (
                <Image source={apple} style={{ height: 15, width: 15 }} />
              )}
              outlineColor={"#dedede"}
              labelStyle={{
                color: "#000",
                paddingTop: 10,
                paddingBottom: 10,
                marginRight: 5,
                fontFamily: "Inter_500Medium",
              }}
            />
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderColor: "#dedede",
  },
});
