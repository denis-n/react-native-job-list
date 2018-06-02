import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
import { Card, Button } from "react-native-elements";

import Swipe from "../components/Swipe";
import * as actions from "../actions";

class DeckScreen extends Component {
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === "android" ? true : false}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet}</Text>
      </Card>
    );
  }

  goToMapScreen = () => {
    this.props.navigation.navigate("map");
  };

  renderNoMoreCards = () => {
    return (
      <Card title="No more jobs">
        <Button
          large
          title="Return"
          backgroundColor="#009688"
          onPress={this.goToMapScreen}
        />
      </Card>
    );
  };

  handleJobLike = job => {
    this.props.likeJob(job);
  };

  renderJobs = () => {
    const { jobs } = this.props;

    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={jobs}
          keyProp="jobkey"
          renderNoMoreCards={this.renderNoMoreCards}
          renderCard={this.renderCard}
          onSwipeRight={this.handleJobLike}
        />
      </View>
    );
  };

  render() {
    return this.renderJobs();
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  }
});

const mapStateToProps = state => {
  return {
    jobs: state.jobs.results
  };
};

export default connect(mapStateToProps, actions)(DeckScreen);
