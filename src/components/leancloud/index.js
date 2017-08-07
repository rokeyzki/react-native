import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

import AV from './config';

export default class LeanCloudExam extends React.Component {
  save() {
    const TestObject = AV.Object.extend('TestObject');
    const testObject = new TestObject();
    testObject.save({
      words: 'Hello World!',
    }).then((object) => {
      console.dir(object);
      alert(`LeanCloud Rocks! ID:${object.id}`);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LeanCloud 测试</Text>
        <Button
          onPress={() => this.save()}
          title="Press Button"
        />
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