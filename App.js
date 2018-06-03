import React from "react";
import { Platform, View, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Constants } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Icon } from "react-native-elements";
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./store";
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

    main: createBottomTabNavigator(
      {
        map: MapScreen,

        deck: DeckScreen,

        review: {
          screen: ReviewNavigator,
          navigationOptions: {
            tabBarLabel: "Review",

            tabBarIcon: ({ tintColor }) => (
              <Icon name="favorite" size={30} color={tintColor} />
            )
          }
        }
      },
      {
        tabBarOptions: {
          labelStyle: {
            fontSize: 12
          }
        }
      }
    )
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

const App = () => {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
