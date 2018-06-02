import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
import { connect } from "react-redux";

import * as actions from "../actions";

class SettingsScreen extends Component {
  render() {
    return (
      <Card title="Reset">
        <Button
          large
          backgroundColor="#009688"
          icon={{ name: "delete-forever" }}
          title="Reset Liked Jobs"
          onPress={this.props.clearLikedJobs}
        />
      </Card>
    );
  }
}

export default connect(null, actions)(SettingsScreen);
