import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  WebView
} from "react-native";
import Carousel from "react-native-looped-carousel";
import { Audio, VideoPlayer } from "expo";
import { Icon } from "react-native-elements";
import { NavigationActions } from 'react-navigation';
const { width, height } = Dimensions.get("window");

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      isLoading: false,
      videos: []
    };
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }} onLayout={this.onLayoutDidChange}>
          <Carousel
            delay={1000}
            style={this.state.size}
            autoplay={false}
            arrows={true}
            leftArrowText={"＜"}
            leftArrowStyle={{ color: "#517fa4", fontSize: 30, margin: 10 }}
            rightArrowText={"＞"}
            rightArrowStyle={{ color: "#517fa4", fontSize: 30, margin: 10 }}
            pageInfo={false}
            pageInfoBackgroundColor="#517fa4"
            isLooped={true}
          >
            {this.state.videos.map((vid, i) => (
              <View style={[styles.view1, this.state.size]}>
                <WebView
                  style={styles.imageItem}
                  javaScriptEnabled={true}
                  source={{
                    uri: vid.videoUrl
                  }}
                />
              </View>
            ))}
          </Carousel>
        </View>
      );
    }
  }

  componentDidMount() {
    if (this.state.videos && this.state.videos.length <= 0) {
      this.getVideosFromApi();
    }
  }

  getVideosFromApi() {
    return fetch("https://what-is-that-recep.firebaseio.com/videos.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          videos: responseJson.videos.sort(this.compare),
          isLoading: true
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  compare(a, b) {
    if (a.sort < b.sort) return -1;
    if (a.sort > b.sort) return 1;
    return 0;
  }

  onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#ccffff",
    alignItems: "center",
    justifyContent: "center"
  },
  imageItem: {
    width: 300,
    height: 400,
    borderRadius: 10
    //backgroundColor: 'green'
  }
});
