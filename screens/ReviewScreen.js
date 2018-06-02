import React, { Component } from "react";
import { View, Text, ScrollView, Linking, Platform } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { MapView } from "expo";
import { connect } from "react-redux";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Review Jobs",

      headerRight: (
        <Button
          color="#009688"
          backgroundColor="transparent"
          title="Settings"
          onPress={() => {
            navigation.navigate("settings");
          }}
        />
      )
    };
  };

  renderLikedJobs = () => {
    const { jobUrl } = this.props;

    return this.props.likedJobs.map(job => {
      const initialRegion = {
        longitude: job.longitude,
        latitude: job.latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };

      return (
        <Card key={job.jobkey} title={job.jobtitle}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === "android"}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detail}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#009688"
              onPress={() => Linking.openURL(jobUrl)}
            />
          </View>
        </Card>
      );
    });
  };

  render() {
    return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
  }
}

const styles = {
  detail: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  italics: {
    fontStyle: "italic"
  }
};

const mapStateToProps = state => {
  return {
    likedJobs: state.likedJobs,
    jobUrl:
      "https://www.indeed.com/viewjob?jk=e00c791b5f53e7e2&tk=1cf0793v451cn9uf&from=serp&vjs=3"
  };
};

export default connect(mapStateToProps)(ReviewScreen);
