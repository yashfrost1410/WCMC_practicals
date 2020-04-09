import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
class Practical3 extends Component {
  static navigationOptions = {
    title: "Practical 3",
    headerStyle: {
      backgroundColor: "grey"
    },
    headerTintColor: "white"
  };
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "black", color: "white", height: 100 }}
        >
          <Left style={{ marginLeft: 10 }}>
            <Icon
              ios="ios-menu"
              android="md-menu"
              style={{ fontSize: 30, color: "white" }}
              name="ios-menu"
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }
            ></Icon>
          </Left>
          <Body>
            <Title>Practical 3</Title>
          </Body>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey"
          }}
        >
          <Text>Screen</Text>
        </Content>
      </Container>
    );
  }
}
export default Practical3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
