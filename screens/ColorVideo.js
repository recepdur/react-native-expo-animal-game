import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class ColorVideo extends React.Component {
  constructor(props) {
      super(props);
    }

    render() { 
        return (
            <View style={styles.container}>
                <Text>Renk Videolar</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16a085'
    }
});