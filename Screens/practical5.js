//app.js
import * as React from 'react';
import { Text, View, StyleSheet, ToastAndroid, Button } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Practical5 extends React.Component {
  Check = () => {
    setInterval(() => ToastAndroid.show("Hello World", ToastAndroid.SHORT), 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          toast is updated every 3 second{this.Check}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

