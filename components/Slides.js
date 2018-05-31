import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";

class Slides extends Component {
  renderItems = () => {
    const { data, onComplete } = this.props;

    return data.map((item, index) => {
      const isLast = index === data.length - 1;

      return (
        <View
          key={item.text}
          style={[styles.slide, { backgroundColor: item.color }]}
        >
          <Text style={styles.text}>{item.text}</Text>
          {isLast ? (
            <Button
              title="Onwards!"
              onPress={onComplete}
              buttonStyle={styles.button}
            />
          ) : null}
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
    color: "#fff",
    textAlign: "center"
  },
  button: {
    marginTop: 25,
    backgroundColor: "#0288d1"
  }
});

export default Slides;
