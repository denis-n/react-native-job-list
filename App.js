import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";

const MainNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,

  auth: AuthScreen,

  main: createBottomTabNavigator({
    map: MapScreen,

    deck: DeckScreen,

    review: createStackNavigator({
      review: ReviewScreen,

      settings: SettingsScreen
    })
  })
});

export default MainNavigator;
