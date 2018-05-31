import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import * as actions from "../actions";

function mapStateToProps(state) {
  return {};
}

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    return (
      <View>
        <Text>Auth</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(AuthScreen);
