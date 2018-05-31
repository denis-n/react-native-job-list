import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button, AsyncStorage } from "react-native";

import * as actions from "../actions";

function mapStateToProps({ auth }) {
  return {
    token: auth.token
  };
}

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  componentDidUpdate() {
    this.onAuthComplete(this.props);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("map");
    }
  }

  render() {
    return <View />;
  }
}

export default connect(mapStateToProps, actions)(AuthScreen);
