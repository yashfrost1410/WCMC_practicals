import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

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
import Constants from "expo-constants";
import yash from "./commonComponent"
import { DrawerActions } from "react-navigation-drawer";
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
class Practical1 extends Component {

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
          <Text style={{ fontSize: 50, textDecorationLine: 'line-through', letterSpacing: 10 }}>Hello World</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

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
export default Practical1;
