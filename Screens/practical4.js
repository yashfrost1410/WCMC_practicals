import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Picker
} from "react-native";

class Practical4 extends Component {
  state = {
    temperature1: "",
    temperature2: "",
    choice: "C2F"
  };
  convert = (
    temperature1 = this.state.temperature1,
    choice = this.state.choice
  ) => {
    if (choice == "C2F") {
      var FahrenheitTemp = parseFloat(temperature1) * (9 / 5) + 32;
      FahrenheitTemp.toString();
      this.setState({ temperature2: "Fahrenheit : " + FahrenheitTemp });
    } else {
      var CelsiusTemp = (5 / 9) * (parseFloat(temperature1) - 32);
      CelsiusTemp.toString();
      this.setState({ temperature2: "Celsius : " + CelsiusTemp });
    }
  };

  updateChoice = choice => {
    this.setState({ choice: choice });
    if (choice == "C2F") {
      var FahrenheitTemp = parseFloat(this.state.temperature1) * (9 / 5) + 32;
      FahrenheitTemp.toString();
      this.setState({ temperature2: "Fahrenheit : " + FahrenheitTemp });
    } else {
      var CelsiusTemp = (5 / 9) * (parseFloat(this.state.temperature1) - 32);
      CelsiusTemp.toString();
      this.setState({ temperature2: "Celsius : " + CelsiusTemp });
    }
  };

  handleNo = text => {
    this.setState({ temperature1: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}> Temperature Converter </Text>
        </TouchableOpacity>

        <Picker
          selectedValue={this.state.choice}
          onValueChange={this.updateChoice}
          style={styles.pickerStyle}
        >
          <Picker.Item label="Celsius to Fahrenheit" value="C2F" />
          <Picker.Item label="Fahrenheit to Celsius" value="F2C" />
        </Picker>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Temperature"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleNo}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.convert(this.state.temperature1)}
        >
          <Text style={styles.submitButtonText}> CONVERT </Text>
        </TouchableOpacity>
        <Text style={styles.ViewTemp}>{this.state.temperature2}</Text>
      </View>
    );
  }
}
export default Practical4;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,

    backgroundColor: "#8076a3"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    alignItems: "center"
  },
  submitButton: {
    backgroundColor: "#000000",
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: "center"
  },
  submitButtonText: {
    color: "white",
    alignItems: "center"
  },
  textCenter: {
    margin: "50%"
  },
  ViewTemp: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  pickerStyle: {
    borderColor: "#000000",
    marginLeft: 19,
    marginRight: 19
  }
});