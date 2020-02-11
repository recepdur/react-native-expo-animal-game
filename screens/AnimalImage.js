import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import Carousel from "react-native-looped-carousel";
import { Audio } from "expo";
import { Icon } from "react-native-elements";
import { NavigationActions } from 'react-navigation';
const { width, height } = Dimensions.get("window");

export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      isLoading: false,
      images: []
    };
    this.playSoundAsync = this.playSoundAsync.bind(this);
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
            delay={10000}
            style={this.state.size}
            autoplay={true}
            arrows={true}
            leftArrowText={"＜"}
            leftArrowStyle={{ color: "#517fa4", fontSize: 30, margin: 10 }}
            rightArrowText={"＞"}
            rightArrowStyle={{ color: "#517fa4", fontSize: 30, margin: 10 }}
            pageInfo={false}
            pageInfoBackgroundColor="#517fa4"
            isLooped={true}
          >
            {this.state.images.map((img, i) => (
              <View style={[styles.view1, this.state.size]}>
                <View style={styles.view2}>
                  <Image
                    resizeMode="contain"
                    style={styles.imageItem}
                    source={{ uri: img.imagePath }}
                  />
                </View>
                <View style={styles.view3}>
                  <TouchableOpacity
                    onPress={() => this.playSoundAsync(img.soundPath)}
                  >
                    <Icon name="play-arrow" reverse color="#517fa4" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </Carousel>
        </View>
      );
    }
  }

  componentDidMount() {
    if (this.state.images && this.state.images.length <= 0) {
      this.getImagesFromApi();
    }
  }

  getImagesFromApi() {
    return fetch("https://what-is-that-recep.firebaseio.com/images.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          images: responseJson.images.sort(this.compare),
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

  playSoundAsync = async soundPath => {
    if (soundPath == "") return;
    // console.log(soundPath);
    const sound = new Audio.Sound();
    //await sound.unloadAsync()
    await Audio.setIsEnabledAsync(true);
    await sound.loadAsync(
      { uri: soundPath },
      { shouldPlay: true },
      { downloadfirst: false }
    );
    const me = sound.getStatusAsync();
  };
  
  onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };
}

const styles = StyleSheet.create({
  view1: {
    flexDirection: "column",
    backgroundColor: "#ccffff"
  },
  view2: {
    flex: 5,
    flexDirection: "row",
    //backgroundColor: 'yellow',
    alignItems: "flex-end",
    justifyContent: "center"
  },
  view3: {
    flex: 2,
    flexDirection: "row",
    //backgroundColor: 'red',
    alignItems: "flex-start",
    justifyContent: "center"
  },
  imageItem: {
    width: 300,
    height: 400,
    borderRadius: 10,
    //backgroundColor: 'green',
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
