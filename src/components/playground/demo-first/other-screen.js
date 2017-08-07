import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item} >
          <Text>A</Text>
        </View>
        <View style={styles.item} >
          <Text>B</Text>
        </View>
        <View style={styles.item} >
          <Text>C</Text>
        </View>
        <View style={styles.item} >
          <Text>D</Text>
        </View>
        <View style={styles.item} >
          <Text>E</Text>
        </View>
        <View style={styles.item} >
          <Text>F</Text>
        </View>
        <View style={styles.item} >
          <Text>G</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 开启flexbox布局
    backgroundColor: 'steelblue',

    flexDirection: 'row-reverse', // 方向，column 垂直，row 水平
    flexWrap: 'wrap', // 换行
    justifyContent: 'flex-end', // 行内重心
    alignItems: 'center', // 单行重心，无换行时生效
    alignContent: 'flex-end', // 多行重心，有换行时生效
  },

  item: {
    width: '30%',
    height: 100,
    backgroundColor: 'skyblue',
    borderWidth: 1,
    borderColor: 'powderblue',

    flexGrow: 0, // 是否填充
  },
});
