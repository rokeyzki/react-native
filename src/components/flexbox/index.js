import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class FlexBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.a]} />
        <View style={[styles.item, styles.b]} />
        <View style={[styles.item, styles.c]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  item: {
    width: 50,
    height: 50,
  },

  a: {
    backgroundColor: 'powderblue'
  },

  b: {
    backgroundColor: 'skyblue'
  },

  c: {
    backgroundColor: 'steelblue'
  }
});