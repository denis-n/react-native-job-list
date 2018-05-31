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

    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("map");
    }
  }

  render() {
    // AsyncStorage.getItem("fb_token", (err, res) => {
    //   console.log("token", res);
    // });

    return (
      <View>
        <Text>Auth</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(AuthScreen);
