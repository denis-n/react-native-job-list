import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  {
    text: "Welcome to JobApp",
    color: "#03a9f4"
  },
  {
    text: "Use this to get a job",
    color: "#009688"
  },
  {
    text: "Set your location, then swipe away",
    color: "#03a9f4"
  }
];

class WelcomeScreen extends Component {
  state = {
    token: null
  };

  componentDidMount() {
    AsyncStorage.getItem("fb_token", (err, result) => {
      if (result) {
        this.setState({
          token: true
        });

        this.props.navigation.navigate("map");
      } else {
        this.setState({
          token: false
        });
      }
    });
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (this.state.token === null) {
      return (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default WelcomeScreen;
