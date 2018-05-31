import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

class Slides extends Component {
  renderItems = () => {
    return this.props.data.map(item => {
      return (
        <View
          key={item.text}
          style={[styles.slide, { backgroundColor: item.color }]}
        >
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    color: "#fff"
  }
});

export default Slides;
