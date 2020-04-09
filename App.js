import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  StyleSheet,
  Button
} from "react-native";

import MyApp from "./routes/drawer";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
class App extends Component {
  state = {
    fontsLoaded: false
  };

  loadFonts() {
    return Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
      "Roboto": require("native-base/Fonts/Roboto.ttf"),
      "Roboto_medium": require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

  async componentDidMount() {
    await this.loadFonts();
    this.setState({ fontsLoaded: true });
  }
  render() {
    if (!this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <Image
            style={{ width: 140, height: 140 }}
            source={require("./assets/icon.png")}
          />
        </View>
      );
    }

    return <MyApp></MyApp>;
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

// var sharedBlacklist = [
//   /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
//   /website\/node_modules\/.*/,
//   /heapCapture\/bundle\.js/,
//   /.*\/__tests__\/.*/
// ];
