import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import { createBottomTabNavigator, DrawerIcon } from "react-navigation";
import colorImageStackNav from "../stackNavs/ColorImage";
import colorVideoStackNav from "../stackNavs/ColorVideo";

const colorTabNav = createBottomTabNavigator(
  {
    Resimler: { screen: colorImageStackNav },
    Videolar: { screen: colorVideoStackNav }
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

export default colorTabNav;