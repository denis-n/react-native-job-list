import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { MapView } from "expo";
import { connect } from "react-redux";
import { Button, Icon } from "react-native-elements";

import * as actions from "../actions";

class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Map",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="my-location" size={30} color={tintColor} />
    )
  };

  state = {
    mapLoaded: false,
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
    }
  };

  componentDidMount() {
    this.setState({
      mapLoaded: true
    });
  }

  onRegionChangeComplete = region => {
    this.setState({
      region
    });
  };

  onPressHandler = () => {
    this.props.fetchJobs(this.state.region);

    this.props.navigation.navigate("deck");
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search"
            onPress={this.onPressHandler}
            backgroundColor="#009688"
            icon={{ name: "search" }}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0
  }
};

export default connect(null, actions)(MapScreen);
