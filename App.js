import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding :20,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-around",
    // flexWrap: "wrap"
  },
  box: {
    height: 150,
    width: 150,
    marginTop:100,
    backgroundColor: "yellow",
  },
  box1: {
    backgroundColor: "yellow",
    flex: 1,
  },
  box2: {
    flex: 2,
    backgroundColor: "green",
    alignSelf : "flex-end"
  },
  box3: {
    flex: 0.5,
    backgroundColor: "purple",
    alignSelf: "center"
  },
});
