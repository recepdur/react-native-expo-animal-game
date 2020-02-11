import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {  createDrawerNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import homeStackNav from "./stackNavs/Home";
import animalTabNav from "./tabNavs/Animal";
import colorTabNav from "./tabNavs/Color";
import aboutStackNav from "./stackNavs/About";

const drawerNav = createDrawerNavigator({
  Home: {
    screen: homeStackNav,
    navigationOptions: {
      drawerLabel: "Anasayfa",
      drawerIcon: ({ tintColor }) => (
        <Icon type="MaterialIcons" name="home" size={25} />
      )
    }
  },
  AnimalTabNav: {
    screen: animalTabNav,
    navigationOptions: {
      drawerLabel: "Hayvanlar",
      drawerIcon: ({ tintColor }) => (
        <Icon type="MaterialIcons" name="android" size={25} />
      )
    }
  },  
  ColorTabNav: {
    screen: colorTabNav,
    navigationOptions: {
      drawerLabel: "Renkler",
      drawerIcon: ({ tintColor }) => (
        <Icon type="MaterialIcons" name="color-lens" size={25} />
      )
    }
  },  
  About: {
    screen: aboutStackNav,
    navigationOptions: {
      drawerLabel: "Hakkında",
      drawerIcon: ({ tintColor }) => (
        <Icon type="MaterialIcons" name="flag" size={25} />
      )
    }
  }
}
/*
  ,{
    contentComponent: (props) => {
        return <View>
                <Text>dsfsdf</Text>
        </View>
    } 
  }
  */
);

export default drawerNav;