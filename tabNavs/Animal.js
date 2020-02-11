import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation";
import animalImageStackNav from "../stackNavs/AnimalImage";
import animalVideoStackNav from "../stackNavs/AnimalVideo";

const animalTabNav = createBottomTabNavigator(
  {
    Resimler: { screen: animalImageStackNav },
    Videolar: { screen: animalVideoStackNav }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Resimler") {
          return <Icon type="MaterialIcons" name="photo-camera" size={25} />;
        } else if (routeName === "Videolar") {
          return <Icon type="MaterialIcons" name="live-tv" size={25} />;
        } 
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default animalTabNav;