import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ToastAndroid,
  StatusBar
} from "react-native";
import {
  Header,
  Icon,
  Left,
  Body,
  Content,
  Container,
  Right,
  Title
} from "native-base";

import { DrawerActions } from "react-navigation-drawer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "0",
      num2: "0"
    };
  }
  static navigationOptions = {
    title: "Practical 2",
    headerStyle: {
      backgroundColor: "red"
    },
    headerTintColor: "cyan"
  };
  render() {
    return (
      <Container>
        <MyStatusBar backgroundColor="black" barStyle="light-content" />
        <Header
          style={{ backgroundColor: "black", color: "white", height: 80 }}
        >
          <Left style={{ flex: 1, alignItems: "center" }}>
            <Icon
              ios="ios-menu"
              android="md-menu"
              style={{ fontSize: 35, color: "white" }}
              name="ios-menu"
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }
            ></Icon>
          </Left>
          <Body style={{ flex: 6, alignItems: "center" }}>
            <Title style={{ fontSize: 25 }}>Practical 1</Title>
          </Body>
          <Right style={{ fleax: 1, paddingRight: 5 }}><Icon
            ios="ios-more"
            android="md-more"
            style={{ fontSize: 35, color: "white" }}
            name="ios-more"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
          ></Icon></Right>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey"
          }}
        >
          <View style={styles.container}>
            <Icon
              ios="ios-menu"
              android="md-menu"
              style={{ fontSize: 30, color: "white" }}
              name="ios-menu"
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }
            ></Icon>
            <TextInput
              keyboardType="numeric"
              placeholder="any number"
              style={styles.input}
              onChangeText={num1 => this.setState({ num1 })}
              value={this.state.num1}
            ></TextInput>
            <TextInput
              keyboardType="numeric"
              placeholder="any number"
              style={styles.input}
              onChangeText={num2 => this.setState({ num2 })}
              value={this.state.num2}
            ></TextInput>
            <Button
              title="calculate"
              onPress={() => {
                let x = String(Number(this.state.num1) + Number(this.state.num2));
                ToastAndroid.show(x, ToastAndroid.SHORT);
              }}
            ></Button>
          </View>
        </Content>
      </Container>

      ///////

    );
  }
}
export default App;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  input: {
    backgroundColor: "white",
    color: "black",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    width: 200
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
