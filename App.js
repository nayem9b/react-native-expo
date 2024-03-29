import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require("./assets/light-bg.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 26,
        }}
      >
        {/* Upper portion of the screen */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 12,
                color: "white",
              }}
            >
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                color: "#fff",
                fontSize: 12,
                marginTop: 8,
              }}
            >
              - Ada Lovelace
            </Text>
          </View>
          {/* <Image source={require("./assets/refresh.png")} /> */}
        </View>
        {/* Bottom Portion of the screen */}
        <View style={{ marginBottom: 36 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("./assets/sun.png")} />
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 15,
                color: "white",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              Good Morning
            </Text>
          </View>

          <View
            style={{
              marginTop: 8,
            }}
          >
            <Text>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 100,
                  color: "white",
                }}
              >
                11:38
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Inter-Regular",
                  fontSize: 15,
                }}
              >
                BST
              </Text>
            </Text>
            {/* LOCATION */}
            <View style={{ marginTop: 16 }}>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 15,
                  color: "white",
                  letterSpacing: 3,
                }}
              >
                IN LONDON, UK
              </Text>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto"></StatusBar>
    </ImageBackground>
  );
}
