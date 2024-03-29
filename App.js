import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
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
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: "Inter-Regular", fontSize: 28 }}>
        Hi,Hope you are doing great
      </Text>
      <Text style={{ fontFamily: "Inter-Bold", fontSize: 28 }}>
        I am testing Inter Bold font
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },
  box: {
    height: 150,
    width: 150,
    marginTop: 100,
    backgroundColor: "yellow",
  },
  box1: {
    backgroundColor: "yellow",
    flex: 1,
  },
  box2: {
    flex: 2,
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  box3: {
    flex: 0.5,
    backgroundColor: "purple",
    alignSelf: "center",
  },
});
