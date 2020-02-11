import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import animalVideoScreen from "../screens/AnimalVideo";

const animalVideo = createStackNavigator({
  AnimalVideoScreen: {
    screen: animalVideoScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Hayvanlar -> Videolar",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={ { paddingLeft: 15}}>
          <Icon type="MaterialIcons" name="menu" size={25} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  }
});

export default animalVideo;