import React, { Component } from "react";
import { View, Text, Button } from "react-native";
// import { Button } from "react-native-elements";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Review Jobs",

      headerRight: (
        <Button
          title="Settings"
          onPress={() => {
            navigation.navigate("settings");
          }}
        />
      )
    };
  };

  render() {
    return (
      <View>
        <Text>Review Screen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
