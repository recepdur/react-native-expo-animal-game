import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class About extends React.Component {
  constructor(props) {
      super(props);
    }

    render() { 

        return (
            <View style={styles.container}>
                <Text>Hakkında</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8e44ad',
    }
});