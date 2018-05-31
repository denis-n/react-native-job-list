import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

class Slides extends Component {
  renderItems = () => {
    return this.props.data.map(item => {
      return (
        <View key={item.text}>
          <Text>{item.text}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideText: {
    fontSize: 30
  }
});

export default Slides;
