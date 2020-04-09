import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { ScrollView, Image, Text, View } from "react-native";
import Practical1 from "../Screens/practical1";
import Practical2 from "../Screens/practical2";
import Practical3 from "../Screens/practical3";
import Practical4 from "../Screens/practical4";
import Practical5 from "../Screens/practical5";
import { Header, Body, Grid, Row, Content, Container } from "native-base";
const CustomDrawerContentComponent = props => (
  <Container style={{ flex: 1 }}>
    <View
      style={{
        height: 300,
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        paddingLeft: 20
      }}
    >
      <View
        style={{
          height: 150,
          backgroundColor: "black",
          color: "white"
        }}
      >
        <Image
          style={{ height: 120, width: 120, borderRadius: 80 }}
          source={require("../assets/images/todoroki.png")}
        ></Image>
        <View
          style={{
            justifyContent: "center",

            height: 60
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            YASH VADARIA | 17IT122
          </Text>
        </View>
      </View>
    </View>
    <ScrollView >
      <DrawerItems {...props} />
    </ScrollView>
  </Container>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Practical1: Practical1,
    Practical2: Practical2,
    Practical3: Practical3,
    Practical4: Practical4,
    Practical5: Practical5
  },
  {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: 'black',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
      inactiveTintColor: 'grey',
      labelStyle: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        backgroundColor: 'transparent'
      }

    }
  }
);
MyApp = createAppContainer(MyDrawerNavigator);
export default MyApp;