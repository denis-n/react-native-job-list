import React from "react";
import { Platform, View, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Constants } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";

import store from "./store";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: Constants.statusBarHeight
      }
    })
  },
  stackHeaderStyle: {
    ...Platform.select({
      android: {
        marginTop: -Constants.statusBarHeight
      }
    })
  }
});

const ReviewNavigator = createStackNavigator(
  {
    review: ReviewScreen,
    settings: SettingsScreen
  },
  {
    navigationOptions: {
      headerStyle: styles.stackHeaderStyle
    }
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    welcome: WelcomeScreen,

    auth: AuthScreen,

    main: createBottomTabNavigator({
      map: MapScreen,

      deck: DeckScreen,

      review: ReviewNavigator
    })
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </Provider>
  );
};

export default App;
