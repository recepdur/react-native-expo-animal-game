import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import colorImageScreen from "../screens/ColorImage";

const colorImage = createStackNavigator({
  ColorImageScreen: {
    screen: colorImageScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Renkler -> Resimler",
      headerLeft: (
        <TouchableOpacity onPress={() =>  navigation.toggleDrawer() } style={ { paddingLeft: 15}}>
          <Icon type="MaterialIcons" name="menu" size={25} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  }
});

export default colorImage;