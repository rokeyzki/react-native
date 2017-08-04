import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>中文测试</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});