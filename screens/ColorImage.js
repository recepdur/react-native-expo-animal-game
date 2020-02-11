import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class ColorImage extends React.Component {
  constructor(props) {
      super(props);
    }

    render() { 
        return (
            <View style={styles.container}>
                <Text>Renk Resimler</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c0392b'
    }
});
