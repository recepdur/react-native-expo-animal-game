import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation"; 
import homeScreen from "../screens/Home";

const home = createStackNavigator({
  HomeScreen: {
    screen: homeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Anasayfa",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={ { paddingLeft: 15}}>
          <Icon type="MaterialIcons" name="menu" size={25} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  }
});

export default home;